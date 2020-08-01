import { Component, h, Prop } from '@stencil/core';

/*
Type: Tag Component

Usage: <boot-tag> Tag <boot-tag/>
Create a tag component with adjustable color scheme

CSS Variables: 
--bg-color (background color)
*/

@Component({
  tag: 'boot-tag',
  styleUrl: 'boot-tag.css',
  shadow: true
})
export class Tag {

    @Prop() name: string;

    render() {
        return (
            <div class="tag"><slot /></div>
        )
    }
}
