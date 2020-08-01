import { Component, h, Prop } from '@stencil/core';

/*
Type: Card Component

Usage: <product-card><product-card/>
Create a Card type component with adjustable color scheme and dimension

CSS Variables: 
---card-w (Card Width)
--card-w  (Card height)
--bg-color (background color)
--price-color (color on pricing)

Properties:
badge: string
img: string
category: string
item: string
description: string
price: string
*/

@Component({
  tag: 'product-card',
  styleUrl: 'product-card.css',
  shadow: true
})
export class ProductCard {

    @Prop() badge: string;
    @Prop() img: string;
    @Prop() category: string;
    @Prop() item: string;
    @Prop() description: string;
    @Prop() price: string;

    render() {
        return (
            <div class="product-card">
                <div class="badge">{this.badge}</div>
                <div class="product-thumb">
                    <img src={this.img} alt=""/>
                    <rating-system></rating-system>
                </div>
                <div class="product-details">
                    <span class="product-catagory">{this.category}</span>
                    <h4><a href="">{this.item}</a></h4>
                    <p>{this.description}</p>
                    <div class="product-bottom-details">
                        <div class="product-price">${this.price}</div>
                    </div>
                </div>
            </div>
        );
    }
}
