// ApplicationRef
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { ROUTES } from './app.routing';

// import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

// App modules/components
import { SidenavbarModule } from './shared/sidenavbar/sidenavbar.module';
import { TopnavbarModule } from './shared/topnavbar/topnavbar.module';
import { FooterModule } from './shared/footer/footer.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,

    TopnavbarModule,
    SidenavbarModule,
    FooterModule,

    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(public appRef: ApplicationRef) {}
  // hmrOnInit(store) {
  //   console.log('HMR store', store);
  // }
  // hmrOnDestroy(store) {
  //   let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
  //   // recreate elements
  //   store.disposeOldHosts = createNewHosts(cmpLocation);
  //   // remove styles
  //   removeNgStyles();
  // }
  // hmrAfterDestroy(store) {
  //   // display new elements
  //   store.disposeOldHosts();
  //   delete store.disposeOldHosts;
  // }
}
