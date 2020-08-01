import { r as registerInstance, h } from './index-4a2da18d.js';

const progressBarCss = ".progress{margin:20px auto;padding:0;width:var(--bar-width, 50%);height:var(--bar-height, 30px);overflow:hidden;background:var(--progress-background, #e5e5e5);border-radius:30px}.bar{position:relative;float:left;min-width:1%;height:100%;background:var(--bar-color, #D7778E)}.percent{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0;font-size:1vw;color:var(--font-color, #fff)}";

const ProgressBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        let styles = {
            'width': this.progress + '%'
        };
        return (h("div", { class: "progress" }, h("div", { class: "bar", style: styles }, h("p", { class: "percent" }, this.progress, "%"))));
    }
};
ProgressBar.style = progressBarCss;

export { ProgressBar as progress_bar };
