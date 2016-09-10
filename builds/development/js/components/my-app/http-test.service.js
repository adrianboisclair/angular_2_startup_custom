System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var HTTPTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HTTPTestService = (function () {
                function HTTPTestService(_http) {
                    this._http = _http;
                }
                HTTPTestService.getContent = function (string) {
                    return string;
                };
                HTTPTestService.prototype.getWeather = function () {
                    var city = 'West Hollywood';
                    var country = 'USA';
                    var API_KEY = '0c45c8c08ae88f19023bf1f03db86488';
                    var APP_ID = 'b1b15e88fa797225412429c1c50c122a1';
                    var API_AP = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + APP_ID;
                    var url = API_AP + '&apikey=' + API_KEY;
                    return this._http.get(url)
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService.prototype.getCurrentTime = function () {
                    return this._http.get('http://date.jsontest.com')
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService.prototype.postJSON = function () {
                    var json = JSON.stringify({ var1: 'test', var2: 3 });
                    var params = 'json=' + json;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http
                        .post('http://validate.jsontest.com', params, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTestService);
                return HTTPTestService;
            }());
            exports_1("HTTPTestService", HTTPTestService);
        }
    }
});

//# sourceMappingURL=http-test.service.js.map
