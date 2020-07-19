import { Component, h} from '@stencil/core';

@Component({
  tag: 'my-model',
  styleUrl: 'my-model.css',
  shadow: true
})
export class MyModel {

  render() {
  return <div>Hello! There general kenobi</div>;
  }
}