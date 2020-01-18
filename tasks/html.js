import {src, dest} from "gulp"
import htmlMin from "gulp-htmlmin"
import htmlReplace from "gulp-html-replace"
import config from "../config";

const html = () => {
    return src(config.htmlin)
        .pipe(htmlReplace({
            'css': config.cssreplaceout,
            'js': config.jsreplaceout
        }))
        .pipe(htmlMin({
            sortAttributes: true,
            sortClassName: true,
            collapseWhitespace: true
        }))
        .pipe(dest(config.build))
};

export default html
