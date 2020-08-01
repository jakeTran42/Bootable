import { r as registerInstance, h } from './index-4a2da18d.js';

const loaderCircleCss = ".loader{border:16px solid #323A45;border-top:var(--loader-properties, 16px solid #D7778E);border-radius:50%;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

const LoaderCircle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", { class: "loader" });
    }
};
LoaderCircle.style = loaderCircleCss;

export { LoaderCircle as loader_circle };
