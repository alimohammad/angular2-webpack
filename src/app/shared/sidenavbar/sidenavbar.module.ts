import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {SideNavbarComponent} from "./sidenavbar.component";

@NgModule({
    declarations: [SideNavbarComponent],
    imports     : [BrowserModule, RouterModule],
    exports     : [SideNavbarComponent],
})

export class SidenavbarModule {}