import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'my-model',
  styleUrl: 'my-model.css',
  shadow: true
})
export class MyModel {

  @Prop() text: string;

  render() {
  return <div>{this.text}</div>;
  }
}