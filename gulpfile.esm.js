import {task, watch} from 'gulp';
import {development, build, stylus, handlebars, browserSync} from "./tasks"
import config from "./config";

task('default',
    development(),
    watch([config.stylin], stylus),
    watch([config.hbsin], handlebars)
);

task('build', build);




