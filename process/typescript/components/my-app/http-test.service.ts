import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';

@Injectable()
export class HTTPTestService {
    constructor (private _http: Http) {}

    static getContent(string: string) {
        return string;
    }

    getTestApi(str: string) {
        return this._http.get('/test_api')
            .map(res => res.json());
    }

    getWeather() {
        var city = 'West Hollywood';
        var country = 'USA';
        const API_KEY = '0c45c8c08ae88f19023bf1f03db86488';
        const APP_ID = 'b1b15e88fa797225412429c1c50c122a1';
        const API_AP = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + APP_ID;
        var url = API_AP + '&apikey=' + API_KEY;

        return this._http.get(url)
            .map(res => res.json());
    }

    getCurrentTime() {
        return this._http.get('http://date.jsontest.com')
            .map(res => res.json());
    }

    postJSON() {
        var json = JSON.stringify({ var1: 'test', var2: 3 });
        var params = 'json=' + json;
        var headers = new Headers();
        headers.append(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );

        return this._http
            .post(
                'http://validate.jsontest.com',
                params, {
                    headers: headers
                }
            )
            .map(res => res.json());
    }

}