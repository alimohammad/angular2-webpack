import { Component, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

declare var jQuery: any;

@Component({
    selector: 'my-sidenavbar',
    templateUrl: './sidenavbar.component.html'
})

export class SideNavbarComponent implements AfterViewInit {
    constructor(private router: Router) {}
    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }
    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}
