import {Component} from 'angular2/core';

@Component({
    selector: 'hero-component',
    templateUrl: 'partials/hero.html',
    styles: [`
   .hero {
     width: 100%;
     overflow: hidden;
   }
   .jumbotron {
     background: url(http://lorempixel.com/1400/400/city/);
   }
    `]
})

export class HeroComponent{

}