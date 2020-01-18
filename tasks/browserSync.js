import {create} from 'browser-sync'
import config from "../config";

const bs = create();

const browserSync = () => {
    bs.init({
        watch: true,
        notify: false,
        server: {
            baseDir: config.src,
        }
    });
};

export default browserSync;
