import { Component, h, Prop} from '@stencil/core';

/*
Type: Modal Component

Usage: <boot-modal text="string"><boot-modal/>
Create a modal type component

Properties:
text: "String"
*/


@Component({
  tag: 'boot-modal',
  styleUrl: 'boot-modal.css',
  shadow: true
})
export class Modal {

  @Prop() text: string;

  render() {
  return <div>{this.text}</div>;
  }
}