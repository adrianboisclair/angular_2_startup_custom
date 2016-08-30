import {Component} from 'angular2/core';
import {HeroComponent} from './hero.component';

@Component({
    selector: 'content-container',
    templateUrl: 'partials/content.html',
    directives: [HeroComponent],
    styles: [`
   main { height: 100vh; }
    `]
})

export class ContentContainer{

}