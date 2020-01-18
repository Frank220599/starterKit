import {ncp} from 'ncp';

const copyFonts = () => {
    ncp(
        __dirname + "/../src/assets/fonts",
        __dirname + "/../build/assets/fonts",
        err => {
            err
                ? console.error(err)
                : console.log('done!');
        }
    )
    ;
}

export default copyFonts
