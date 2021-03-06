import LogoReact from '../assets/logo-react.svg';
import LogoBootstrap from '../assets/logo-bootstrap.svg';
import LogoTailwind from '../assets/logo-tailwind.svg';
import LogoSass from '../assets/logo-sass.svg';
import LogoWebpack from '../assets/logo-webpack.svg';
import LogoBabel from '../assets/logo-babel.svg';
import LogoFirebase from '../assets/logo-firebase.svg';
import LogoApp from '../assets/Applet.png'
import LogoJs from '../assets/logo-js.svg';
import LogoHtml5 from '../assets/logo-html5.svg';
import LogoCss3 from '../assets/logo-css3.svg';

export const Logo = LogoApp;
export const Logos = [
    { src: LogoJs, name: 'JavaScript' },
    { src: LogoHtml5, name: 'Html 5' },
    { src: LogoCss3, name: 'Css 3' },
    { src: LogoReact, name: 'React' },
    { src: LogoBootstrap, name: 'Bootstrap' },
    { src: LogoTailwind, name: 'Tailwind' },
    { src: LogoSass, name: '' },
    { src: LogoBabel, name: '' },
    { src: LogoWebpack, name: 'Webpack' },
    { src: LogoFirebase, name: 'Firebase' }
];

export function getImgBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
    //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}