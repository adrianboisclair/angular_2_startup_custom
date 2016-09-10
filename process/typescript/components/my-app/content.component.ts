import {Component} from 'angular2/core';
import {HeroComponent} from './hero.component';
import {HTTPTestService} from './http-test.service';

@Component({
    selector: 'content-container',
    templateUrl: 'partials/content.html',
    directives: [HeroComponent],
    providers: [HTTPTestService],
    styles: [`main { height: 100vh; }`]
})

export class ContentContainer{
    contentData: string;

    constructor(private _httpService: HTTPTestService) {}

    onGetContent() {
        this._httpService.getWeather()
            .subscribe(
                data => this.contentData = JSON.stringify(data),
                error => console.log(error),
                () => console.log('Completed onGetWeather / getWeather function.')
            )
    }
}