import {src, dest} from 'gulp'
import concat from 'gulp-concat'
import js from 'gulp-uglify'
import config from "../config";

const uglify = () => {
    return src(config.jsin)
        .pipe(concat(config.jsoutname))
        .pipe(js())
        .pipe(dest(config.jsout));
};

export default uglify;
