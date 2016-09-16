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
    <button (click)='onGetTestApi()'>Test Get Test API</button><br>
    <p>Output: {{testApi}}</p>

    `,
    providers: [HTTPTestService]
})

export class HTTPTestComponent {
    getData: string;
    postData: string;
    weatherData: string;
    testApi: string;

    constructor(private _httpService: HTTPTestService) {}

    onGetTestApi() {
        this._httpService.getTestApi('string')
            .subscribe(
                data => this.testApi = JSON.stringify(data),
                error => console.log(error),
                () => console.log('Completed test api.')
            )
    }

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
