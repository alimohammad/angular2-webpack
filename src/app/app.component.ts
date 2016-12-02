import { Component, AfterViewInit } from '@angular/core';
import * as inspinia from './app.helpers';

declare var jQuery: any;

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements AfterViewInit {

    ngAfterViewInit() {
        // Run correctHeight function on load and resize window event
        jQuery(window).bind('load resize', function() {
            inspinia.correctHeight();
            inspinia.detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        jQuery('.metismenu a').click(() => {
            setTimeout(() => {
                inspinia.correctHeight();
            }, 300);
        });

        inspinia.metisMenu();
        inspinia.slimScroll();
    }
}

