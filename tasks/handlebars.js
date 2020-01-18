import {src, dest} from 'gulp';
import hbs from 'gulp-compile-handlebars';
import rename from 'gulp-rename';
import handlebar from "handlebars";
import layouts from "handlebars-layouts";

handlebar.registerHelper(layouts(handlebar));

const handlebars = () => {
    const options = {
        batch: ['./src/views/partials', './src/views/layouts', './src/views/components'],
        helpers: {
            times: (n, block) => {
                let accum = '';
                for (let i = 0; i < n; ++i)
                    accum += block.fn(i);
                return accum;
            }

        }
    };

    return src('src/views/pages/*.hbs')
        .pipe(hbs(null, options))
        .pipe(rename(path => {
            path.extname = '.html';
        }))
        .pipe(dest('src/'))
};

export default handlebars;

