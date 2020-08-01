import { Component, h, Prop } from '@stencil/core';

/*
Type: Checkbox Component

Usage: <boot-checkbox> Check <boot-checkbox/>
Create a checknox type component
*/

@Component({
  tag: 'boot-checkbox',
  styleUrl: 'boot-checkbox.css',
  shadow: true
})
export class Checkbox {

    @Prop() name: string;

    render() {
        return (
            <label class="box"> <slot />
                <input type="checkbox" checked/>
                <span class="checkmark"></span>
            </label>
        )
    }
}
