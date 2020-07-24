import { r as registerInstance, h } from './index-4a2da18d.js';

const myNavCss = "*{box-sizing:border-box;margin:0;padding:0}.nav{display:flex;flex-direction:row;justify-content:space-around;align-items:center;text-decoration:none;background-color:#259992;width:100%;height:4em}a{text-decoration:none;color:#fff}";

const MyNavigation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.items = [
            { name: 'Home',
                link: 'https://www.reddit.com/'
            },
            {
                name: 'Login',
                link: 'https://www.reddit.com/'
            },
            {
                name: 'Logout',
                link: 'https://www.reddit.com/'
            },
        ];
    }
    render() {
        return (h("div", { class: "nav" }, this.items.map(item => h("h3", null, h("a", { href: item.link }, item.name)))));
    }
};
MyNavigation.style = myNavCss;

export { MyNavigation as my_nav };
