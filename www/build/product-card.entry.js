import { r as registerInstance, h } from './index-4a2da18d.js';

const productCardCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}a{text-decoration:none}.product-card{width:380px;position:relative;box-shadow:0 2px 7px #dfdfdf;margin:50px auto;background:#fafafa}.badge{position:absolute;left:0;top:20px;text-transform:uppercase;font-size:13px;font-weight:700;background:red;color:#fff;padding:3px 10px}.product-thumb{display:flex;align-items:center;justify-content:center;height:300px;padding:50px;background:#f0f0f0}.product-thumb img{max-width:100%;max-height:100%;object-fit:contain}.product-details{padding:30px;background-color:var(--bg-color, #D7778E)}.product-catagory{display:block;font-size:12px;font-weight:700;text-transform:uppercase;color:#ccc;margin-bottom:18px}.product-details h4 a{font-weight:500;display:block;margin-bottom:18px;text-transform:uppercase;color:#363636;text-decoration:none;transition:0.3s}.product-details h4 a:hover{color:#fbb72c}.product-details p{font-size:15px;line-height:22px;margin-bottom:18px;color:#fff}.product-bottom-details{overflow:hidden;border-top:1px solid #eee;padding-top:20px}.product-bottom-details div{float:left;width:50%}.product-price{font-size:18px;color:var(--price-color, #fbb72c);font-weight:600}.product-links{text-align:right}.product-links a{display:inline-block;margin-left:5px;color:#e1e1e1;transition:0.3s;font-size:17px}.product-links a:hover{color:#fbb72c}";

const ProductCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "product-card" }, h("div", { class: "badge" }, this.badge), h("div", { class: "product-thumb" }, h("img", { src: this.img, alt: "" })), h("div", { class: "product-details" }, h("span", { class: "product-catagory" }, this.category), h("h4", null, h("a", { href: "" }, this.item)), h("p", null, this.description), h("div", { class: "product-bottom-details" }, h("div", { class: "product-price" }, "$", this.price)))));
    }
};
ProductCard.style = productCardCss;

export { ProductCard as product_card };
