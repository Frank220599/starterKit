import {series} from 'gulp';
import {stylus, handlebars, browserSync} from "../tasks"

const development = () => series(
    stylus,
    handlebars,
    browserSync,
);

export default development;
