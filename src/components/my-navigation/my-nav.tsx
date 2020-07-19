import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-nav',
  styleUrl: 'my-nav.css',
  shadow: true
})
export class MyNavigation {

    public items : Array<any> = [
        {  name: 'Home', 
           link: 'https://www.reddit.com/'
        },
        {
           name: 'Login', 
           link : 'https://www.reddit.com/'
        },
        {
           name : 'Logout',
           link: 'https://www.reddit.com/'
        },
     ];

    render() {
        return (
            <div class="nav">
                {this.items.map(item => <h3><a href={item.link}>{item.name}</a></h3>)}
            </div>
        )
    }
}