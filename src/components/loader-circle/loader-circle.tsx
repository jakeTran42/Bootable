import { Component, h } from '@stencil/core';

/*
Type: Loader Component

Usage: <loader-circle><loader-circle/>
Create a circle load component

CSS Variables: 
--loader-border (border thichkness)
*/

@Component({
  tag: 'loader-circle',
  styleUrl: 'loader-circle.css',
  shadow: true
})
export class LoaderCircle {

  render() {
  return <div class="loader"></div>;
  }
}
