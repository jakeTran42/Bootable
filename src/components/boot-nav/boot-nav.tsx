import { Component, h } from '@stencil/core';

/*
Type: Button Component

Usage:  <boot-nav> 
            <div></div>
            <div></div> 
            <div></div> 
        <boot-nav/>
Create a button type component with adjustable color scheme and layout

CSS Variables: 
--spacing (justify content)
--nav-position (fixed, absolute, relative)
--bg-color (background color)
*/

@Component({
  tag: 'boot-nav',
  styleUrl: 'boot-nav.css',
  shadow: true
})
export class Navigation {

    render() {
        return (
            <div class="nav">
               <slot />
            </div>
        )
    }
}