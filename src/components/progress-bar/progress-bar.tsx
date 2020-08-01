import { Component, h, Prop } from '@stencil/core';

/*
Type: Progress Bar Component

Usage: <progress-bar progress="50%"><progress-bar/>
Create a progress type component with adjustable color scheme

CSS Variables: 
--fnt-color (font color)
--bar-color (bar color)
--bg-color (background color)
--bar-width
--bar-height

Properties:
progress: string (percentage number)
*/

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true
})
export class ProgressBar {

    @Prop() progress: string;

    render() {
        let styles = {
            'width': this.progress+'%'
        }
    
        return (
            <div class="progress">
                <div class="bar" style={styles}>
                    <p class="percent">{this.progress}%</p>
                </div>
            </div>
        );
    }
}
