import { Component, h } from '@stencil/core';

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
