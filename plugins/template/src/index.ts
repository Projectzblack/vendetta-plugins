import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Hello! Haiii!! :3 :333");
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}