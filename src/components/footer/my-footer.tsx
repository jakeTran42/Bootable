import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true
})
export class MyFooter {

  @Prop() FooterName: string = 'Footer';
  @State() state: boolean = false;



  render() {
    return (
      <div class="my-footer">
        {this.FooterName}
      </div>
    );
  }
}
