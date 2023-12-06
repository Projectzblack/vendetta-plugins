// import { logger } from "@vendetta";
// import Settings from "./Settings";

// export default {
//     onLoad: () => {
//         logger.log("Hello! Haiii!! :3 :333");
//     },
//     onUnload: () => {
//         logger.log("Goodbye, world.");
//     },
//     settings: Settings,
// }

import { findByDisplayName, findByProps } from "@vendetta/metro";
import { after } from "@vendetta/patcher";
import { getAssetIDByName } from "@vendetta/ui/assets";
import { FormRow } from "@vendetta/ui/components/Forms";

const LazyActionSheet = findByProps("openLazy", "hideActionSheet");
const MessageLongPressActionSheet = findByProps("EmojiRow");
const Icon = findByDisplayName("Icon");

// In onLoad or wherever you want to trigger the patch
after("default", MessageLongPressActionSheet, ([{ message }], res) => {
  // You can access the message data from the message argument
  
  // this is a array of ButtonRow that we will push to to add the custom button. 
  let buttons = res?.props?.children?.props?.children?.props?.children[1];
  
  // This is the icon for our button. You can use Vendetta's asset browser in the developer menu to find one that fits.
  const buttonIcon = getAssetIDByName("ic_select_manually_24px");
  
  // This is the label for the button. Change it to whatever you like!
  const buttonLabel = "Click me! :3";
  
  // This is what gets called when the button gets clicked. Put whatever code you want to run on click in this. Remember you can access the message data with the message argument!
  const buttonCallback = () => {
    console.log("Haiiii!!!! :3333");
    // You can use LazyActionSheet's hideActionSheet function to close the action sheet.
    LazyActionSheet.hideActionSheet();
  };

  // This is our button. It's a FormRow that looks just like a ButtonRow. It uses the previously defined data (buttonIcon, buttonLabel, buttonCallback)
  const button = (<FormRow
    leading={<Icon source={buttonIcon} />}
    label={buttonLabel}
    onPress={buttonCallback}
  />);

  // Finally, we push our custom button into the list of custom buttons. You can also splice or unshift it, but you'll need to figure that out yourself :)
  buttons.push(button);
});