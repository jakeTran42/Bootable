import { Component, h, Prop } from '@stencil/core';

/*
Type: Toggle Component

Usage: <toggle-switch><toggle-switch/>
Create a Toggle type component with adjustable dimension

CSS variables:
--toggle-width
*/

@Component({
  tag: 'toggle-switch',
  styleUrl: 'toggle-switch.css',
  shadow: true
})
export class MyName {

    @Prop() name: string;

    render() {
        return (
            <input class="toggle-button" type="checkbox" />
        )
    }
}
