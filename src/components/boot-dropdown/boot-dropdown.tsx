import { Component, h } from '@stencil/core';

/*
Type: Dropdown Menu Component

Usage: <boot-dropdown>
        <div slot="drp-btn">Dropdown</div>
        <div slot="drp-content">
          <a href="">Item One</a>
          <a href="">Item Two</a>
        </div>
      </boot-dropdown>

Create a Dropwon type component with adjustable color scheme

CSS Variables: 
--fnt-color (button font color)
--bg-color (background color)
*/

@Component({
  tag: 'boot-dropdown',
  styleUrl: 'boot-dropdown.css'
})
export class Dropdown {
  
  render() {
    return (
        <div class="dropdown">
           <div class="drp-btn"><slot name="drp-btn"/></div>
           <div class="drp-content"><slot name="drp-content"/></div>
        </div>
    );
  }
}