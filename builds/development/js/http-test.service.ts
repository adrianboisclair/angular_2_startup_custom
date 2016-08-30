import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class HTTPTestService {
    constructor (private _http: Http) {}

    getCurrentTIme() {
        return this._http.get('http://date.jsontest.com')
            .map(res => res.json())
    }
}