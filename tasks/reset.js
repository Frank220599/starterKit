import del from 'del'
import config from "../config";

const reset = () => {
    return del([config.build]);
};

export default reset;
