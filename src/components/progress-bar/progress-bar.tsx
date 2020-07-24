import { Component, h, Prop } from '@stencil/core';

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
