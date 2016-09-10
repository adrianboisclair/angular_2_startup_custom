import {Component} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import {HTTPTestService} from './http-test.service';

@Component({
    selector: 'http-test',
    template: `
    <button (click)='onTestGet()'>Test Get Req</button><br>
    <p>Output: {{getData}}</p>
    <button (click)='onTestPost()'>Test Post Req</button><br>
    <p>Output: {{postData}}</p>
    <button (click)='onGetWeather()'>Test Get Weather</button><br>
    <p>Output: {{weatherData}}</p>

    `,
    providers: [HTTPTestService]
})

export class HTTPTestComponent {
    getData: string;
    postData: string;
    weatherData: string;

    constructor(private _httpService: HTTPTestService) {}

    onGetWeather() {
        this._httpService.getWeather()
            .subscribe(
                data => this.weatherData = JSON.stringify(data),
                error => console.log(error),
                () => console.log('Completed onGetWeather / getWeather function.')
            )
    }

    onTestGet() {
        this._httpService.getCurrentTime()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => console.log(error),
                () => console.log('Completed onTestGet / getCurrentTime function.')
            )
    }

    onTestPost() {
        this._httpService.postJSON()
            .subscribe(
                data => this.postData = JSON.stringify(data),
                error => console.log(error),
                () => console.log('Completed onTestPost / postJSON function.')
            )
    }
}
