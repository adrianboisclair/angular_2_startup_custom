System.register(['angular2/core', './http-test.service'], function(exports_1, context_1) {
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
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPTestComponent.prototype.onGetTestApi = function () {
                    var _this = this;
                    this._httpService.getTestApi('string')
                        .subscribe(function (data) { return _this.testApi = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return console.log('Completed test api.'); });
                };
                HTTPTestComponent.prototype.onGetWeather = function () {
                    var _this = this;
                    this._httpService.getWeather()
                        .subscribe(function (data) { return _this.weatherData = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return console.log('Completed onGetWeather / getWeather function.'); });
                };
                HTTPTestComponent.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpService.getCurrentTime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return console.log('Completed onTestGet / getCurrentTime function.'); });
                };
                HTTPTestComponent.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpService.postJSON()
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return console.log('Completed onTestPost / postJSON function.'); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n    <button (click)='onTestGet()'>Test Get Req</button><br>\n    <p>Output: {{getData}}</p>\n    <button (click)='onTestPost()'>Test Post Req</button><br>\n    <p>Output: {{postData}}</p>\n    <button (click)='onGetWeather()'>Test Get Weather</button><br>\n    <p>Output: {{weatherData}}</p>\n    <button (click)='onGetTestApi()'>Test Get Test API</button><br>\n    <p>Output: {{testApi}}</p>\n\n    ",
                        providers: [http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});

//# sourceMappingURL=http-test.component.js.map
