System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeaderComponent, BRAND, homeLink, linkOne, linkTwo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                    this.brand = BRAND;
                    this.homeLink = homeLink;
                    this.linkOne = linkOne;
                    this.linkTwo = linkTwo;
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header-navbar',
                        templateUrl: 'partials/header-navbar.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
            // Set the Header Brand
            BRAND = 'Brand';
            homeLink = {
                id: 1,
                name: 'Home',
                slug: 'home',
                url: '/'
            };
            linkOne = {
                id: 2,
                name: 'Link One',
                slug: 'link-one',
                url: '/link-one'
            };
            linkTwo = {
                id: 3,
                name: 'Link Two',
                slug: 'link-two',
                url: '/link-two'
            };
            console.log({ myObj: [homeLink, linkTwo, linkOne] });
        }
    }
});

//# sourceMappingURL=header.component.js.map
