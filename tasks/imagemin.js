import {src, dest} from 'gulp'
import min from 'gulp-imagemin'
import config from "../config";
import changed from 'gulp-changed'

const imagemin = () => {
    return src(config.imgin)
        .pipe(changed(config.imgout))
        .pipe(min([
            min.gifsicle({interlaced: true}),
            min.jpegtran({progressive: true}),
            min.optipng({optimizationLevel: 5}),
            min.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest(config.imgout))
};

export default imagemin;
