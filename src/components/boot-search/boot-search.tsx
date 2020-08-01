import { Component, h, Prop } from '@stencil/core';

/*
Type: Searchbar Component

Usage: <boot-search><boot-search/>
Create a searchbar component with adjustable height and width

CSS Variables: 
--search-width
--search-height
*/

@Component({
  tag: 'boot-search',
  styleUrl: 'boot-search.css',
  shadow: true
})
export class SearchBar {

    @Prop() name: string;

    render() {
        return (
            // <div  class="search-box">
            //     <input type="text" />
            //     <i id="icon" class="search"></i>
            // </div>

            <form class="search-container">
                <input type="text" id="search-bar" placeholder="Search..." />
            </form>
        )
    }
}