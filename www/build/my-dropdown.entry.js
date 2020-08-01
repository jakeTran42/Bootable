import { r as registerInstance, e as createEvent, h } from './index-4a2da18d.js';

const myDropdownCss = "h2{cursor:pointer;position:relative;padding:0 0.35em;font-size:1.35em;font-family:Verdana}h2 span{position:absolute;right:1em;top:0.75em;font-size:0.5em}ul{list-style:none;padding:0}ul li{background:rgba(230, 230, 230, 1);border-bottom:1px solid rgba(200, 200, 200, 1);padding:0.5em 1em}ul li h3{-webkit-margin-before:0.3em;-webkit-margin-after:0.3em;line-height:1.2em;font-family:Verdana;font-size:1rem}ul li p{line-height:1.2em;margin:0 0 1em 0;font-family:Verdana;font-size:1rem}.active{display:block}.inactive{display:none}";

const MyDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onToggle = createEvent(this, "onToggle", 7);
        this.items = [
            { heading: 'Item one',
                description: 'This is Item 1'
            },
            {
                heading: 'Item Two',
                description: 'This is Item 2'
            },
            {
                heading: 'Item Three',
                description: 'This is Item 3'
            },
        ];
        this.toggle = false;
    }
    toggleComponent() {
        this.toggle = !this.toggle;
        // When the user click emit the toggle state value
        // A event can emit any type of value
        this.onToggle.emit({ visible: this.toggle });
    }
    render() {
        return (h("div", null, h("h2", { onClick: () => this.toggleComponent() }, this.name, " ", this.toggle ? h("span", null, "\u25B2") : h("span", null, "\u25BC")), h("ul", { class: this.toggle ? 'active' : 'inactive' }, this.items.map(item => h("li", null, h("h3", null, item.heading), h("p", null, item.description))))));
    }
};
MyDropdown.style = myDropdownCss;

export { MyDropdown as my_dropdown };
