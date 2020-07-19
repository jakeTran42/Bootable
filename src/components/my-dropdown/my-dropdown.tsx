import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';


@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css'
})
export class MyDropdown {

    public items : Array<any> = [
        {  heading: 'Item one', 
           description: 'This is Item 1'
        },
        {
           heading: 'Item Two', 
           description : 'This is Item 2'
        },
        {
           heading : 'Item Three',
           description : 'This is Item 3'
        },
     ];

     @Prop() name: string;
     @State() toggle: boolean = false;
     @Event() onToggle: EventEmitter;

     toggleComponent(): void
     {
        this.toggle = !this.toggle;
        // When the user click emit the toggle state value
        // A event can emit any type of value
        this.onToggle.emit({ visible: this.toggle });
     }
  
  render() {
    return (
        <div>
            <h2 onClick={() => this.toggleComponent()}>{this.name} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}</h2>
            <ul class={ this.toggle ? 'active' : 'inactive' }>
	            {this.items.map(item => <li><h3>{item.heading}</h3><p>{item.description}</p></li>)}
	        </ul>
        </div>
    );
  }
}