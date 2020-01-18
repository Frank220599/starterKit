import {series, parallel} from 'gulp'
import reset from "./reset";
import imagemin from "./imagemin";
import javascript from './javascript';
import stylus from "./stylus";
import copyFonts from "./fonts";
import setEnvProduction from "./setEnvProduction";
import html from "./html";


const build = () => series(
    async () => setEnvProduction(),
    reset,
    parallel(
        html,
        imagemin,
        javascript,
        stylus
    ),
    async () => copyFonts()
);

export default build
