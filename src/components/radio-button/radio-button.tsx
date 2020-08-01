import { Component, h} from '@stencil/core';

/*
Type: Radio Input Component

Usage: <radio-button> Radio <radio-button/>
Create a Radio button type component

*/

@Component({
  tag: 'radio-button',
  styleUrl: 'radio-button.css',
  shadow: true
})
export class MyName {

    render() {
        return (
            <label class="container-radio"><slot />
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
            </label>
        )
    }
}
