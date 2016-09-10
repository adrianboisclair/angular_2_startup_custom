import {Component, Injectable} from 'angular2/core';
import {SearchPipe} from "../../search-pipe";
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {ContentContainer} from './content.component';
import {HTTPTestComponent} from './http-test.component';


@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html',
    directives: [HeaderComponent, FooterComponent, ContentContainer, HTTPTestComponent],
    pipes: [SearchPipe],
    styleUrls: ['css/app.css']
})

export class AppComponent {

    constructor() { }

}


var BRAND: string = 'Brand';
console.log(BRAND);