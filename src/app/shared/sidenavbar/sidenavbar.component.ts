import { Component } from '@angular/core';
import {Router} from '@angular/router';

declare var jQuery:any;

@Component({
    selector: 'sidenavbar',
    templateUrl: './sidenavbar.component.html'
})

export class SideNavbarComponent {

    constructor(private router: Router) {}

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }
}