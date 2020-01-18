import {watch, parallel} from "gulp";
import config from "../config";
import {stylus, javascript} from "./index";

const watcher = () => parallel(
    watch(config.stylin, stylus),
    watch(config.jsin, javascript)
);


export default watcher
