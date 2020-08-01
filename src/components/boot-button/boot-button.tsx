import { Component, h, Prop } from '@stencil/core';

/*
Type: Button Component

Usage: <boot-button> Button <boot-button/>
Create a button type component with adjustable color scheme and border radius

CSS Variables: 
--btn-rad (Button border radius)
--btn-color (button font color)
--bg-color (background color)
*/

@Component({
  tag: 'boot-button',
  styleUrl: 'boot-button.css',
  shadow: true
})
export class Button {

    @Prop() name: string;

    render() {
        return (
            <button><slot/></button>
        )
    }
}