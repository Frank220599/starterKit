import {src, dest} from 'gulp';
import gulpStylus from 'gulp-stylus';
import rename from 'gulp-rename';
import {init, write} from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import config from "../config";

const env = process.env.NODE_ENV === 'production';

const stylus = () => {
    return src('src/stylus/imports.styl')
        .pipe(init())
        .pipe(gulpStylus({
            compress: env
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({
            // prefix: "bonjour-",
            basename: "style",
            suffix: env && ".min"
            // extname: ".md"
        }))
        .pipe(write('.'))
        .pipe(dest(process.env.NODE_ENV === 'production' ? config.cssout : config.stylout))
};

export default stylus;
