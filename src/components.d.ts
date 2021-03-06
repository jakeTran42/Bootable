/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LoaderCircle {
    }
    interface MyBackdrop {
    }
    interface MyDropdown {
        "name": string;
    }
    interface MyModel {
        "text": string;
    }
    interface MyNav {
    }
    interface ProductCard {
        "badge": string;
        "category": string;
        "description": string;
        "img": string;
        "item": string;
        "price": string;
    }
    interface ProgressBar {
        "progress": string;
    }
}
declare global {
    interface HTMLLoaderCircleElement extends Components.LoaderCircle, HTMLStencilElement {
    }
    var HTMLLoaderCircleElement: {
        prototype: HTMLLoaderCircleElement;
        new (): HTMLLoaderCircleElement;
    };
    interface HTMLMyBackdropElement extends Components.MyBackdrop, HTMLStencilElement {
    }
    var HTMLMyBackdropElement: {
        prototype: HTMLMyBackdropElement;
        new (): HTMLMyBackdropElement;
    };
    interface HTMLMyDropdownElement extends Components.MyDropdown, HTMLStencilElement {
    }
    var HTMLMyDropdownElement: {
        prototype: HTMLMyDropdownElement;
        new (): HTMLMyDropdownElement;
    };
    interface HTMLMyModelElement extends Components.MyModel, HTMLStencilElement {
    }
    var HTMLMyModelElement: {
        prototype: HTMLMyModelElement;
        new (): HTMLMyModelElement;
    };
    interface HTMLMyNavElement extends Components.MyNav, HTMLStencilElement {
    }
    var HTMLMyNavElement: {
        prototype: HTMLMyNavElement;
        new (): HTMLMyNavElement;
    };
    interface HTMLProductCardElement extends Components.ProductCard, HTMLStencilElement {
    }
    var HTMLProductCardElement: {
        prototype: HTMLProductCardElement;
        new (): HTMLProductCardElement;
    };
    interface HTMLProgressBarElement extends Components.ProgressBar, HTMLStencilElement {
    }
    var HTMLProgressBarElement: {
        prototype: HTMLProgressBarElement;
        new (): HTMLProgressBarElement;
    };
    interface HTMLElementTagNameMap {
        "loader-circle": HTMLLoaderCircleElement;
        "my-backdrop": HTMLMyBackdropElement;
        "my-dropdown": HTMLMyDropdownElement;
        "my-model": HTMLMyModelElement;
        "my-nav": HTMLMyNavElement;
        "product-card": HTMLProductCardElement;
        "progress-bar": HTMLProgressBarElement;
    }
}
declare namespace LocalJSX {
    interface LoaderCircle {
    }
    interface MyBackdrop {
    }
    interface MyDropdown {
        "name"?: string;
        "onOnToggle"?: (event: CustomEvent<any>) => void;
    }
    interface MyModel {
        "text"?: string;
    }
    interface MyNav {
    }
    interface ProductCard {
        "badge"?: string;
        "category"?: string;
        "description"?: string;
        "img"?: string;
        "item"?: string;
        "price"?: string;
    }
    interface ProgressBar {
        "progress"?: string;
    }
    interface IntrinsicElements {
        "loader-circle": LoaderCircle;
        "my-backdrop": MyBackdrop;
        "my-dropdown": MyDropdown;
        "my-model": MyModel;
        "my-nav": MyNav;
        "product-card": ProductCard;
        "progress-bar": ProgressBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "loader-circle": LocalJSX.LoaderCircle & JSXBase.HTMLAttributes<HTMLLoaderCircleElement>;
            "my-backdrop": LocalJSX.MyBackdrop & JSXBase.HTMLAttributes<HTMLMyBackdropElement>;
            "my-dropdown": LocalJSX.MyDropdown & JSXBase.HTMLAttributes<HTMLMyDropdownElement>;
            "my-model": LocalJSX.MyModel & JSXBase.HTMLAttributes<HTMLMyModelElement>;
            "my-nav": LocalJSX.MyNav & JSXBase.HTMLAttributes<HTMLMyNavElement>;
            "product-card": LocalJSX.ProductCard & JSXBase.HTMLAttributes<HTMLProductCardElement>;
            "progress-bar": LocalJSX.ProgressBar & JSXBase.HTMLAttributes<HTMLProgressBarElement>;
        }
    }
}
