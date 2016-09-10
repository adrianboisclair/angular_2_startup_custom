import {Component} from 'angular2/core';
import {Link} from "./link";
import {LinkL2} from "./linkl2";

@Component({
    selector: 'header-navbar',
    templateUrl: 'partials/header-navbar.html'
})

export class HeaderComponent{
    brand = BRAND;
    homeLink = homeLink;
    linkOne = linkOne;
    linkTwo = linkTwo;
}

// Set the Header Brand
let BRAND: string = 'Brand';

let homeLink: Link = {
    id: 1,
    name: 'Home',
    slug: 'home',
    url: '/'
};

let linkOne: LinkL2 = {
    id: 2,
    name: 'Link One',
    slug: 'link-one',
    url: '/link-one'
};

let linkTwo: LinkL2 = {
    id: 3,
    name: 'Link Two',
    slug: 'link-two',
    url: '/link-two'
};

console.log({ myObj : [homeLink, linkTwo, linkOne ] });