System.register(['angular2/core', './hero.component', './http-test.service'], function(exports_1, context_1) {
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
    var core_1, hero_component_1, http_test_service_1;
    var ContentContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            ContentContainer = (function () {
                function ContentContainer(_httpService) {
                    this._httpService = _httpService;
                }
                ContentContainer.prototype.onGetContent = function () {
                    var _this = this;
                    this._httpService.getWeather()
                        .subscribe(function (data) { return _this.contentData = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return console.log('Completed onGetWeather / getWeather function.'); });
                };
                ContentContainer = __decorate([
                    core_1.Component({
                        selector: 'content-container',
                        templateUrl: 'partials/content.html',
                        directives: [hero_component_1.HeroComponent],
                        providers: [http_test_service_1.HTTPTestService],
                        styles: ["main { height: 100vh; }"]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], ContentContainer);
                return ContentContainer;
            }());
            exports_1("ContentContainer", ContentContainer);
        }
    }
});

//# sourceMappingURL=content.component.js.map
