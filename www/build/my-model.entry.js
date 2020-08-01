import { r as registerInstance, h } from './index-4a2da18d.js';

const myModelCss = "@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');:host{font-family:'Montserrat', sans-serif;justify-content:center;align-items:center;border-radius:10px;margin:8rem auto;padding:2rem;box-shadow:0 2px 10px rgba(0, 0, 0, 0.3);background-color:#fff;position:fixed;top:calc(30% - 175px);width:350px;height:350px;left:calc(50% - 175px);z-index:1000;animation:0.3s ease-in;}";

const MyModel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", null, this.text);
    }
};
MyModel.style = myModelCss;

export { MyModel as my_model };
