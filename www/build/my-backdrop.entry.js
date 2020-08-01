import { r as registerInstance } from './index-4a2da18d.js';

const myBackdropCss = ":host{width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);position:fixed;z-index:100;left:0;top:0}";

const MyBackdrop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return null;
    }
};
MyBackdrop.style = myBackdropCss;

export { MyBackdrop as my_backdrop };
