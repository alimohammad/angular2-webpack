import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopnavbarComponent } from './topnavbar/index';
import { SideNavbarComponent } from './sidenavbar/index';
import { FooterComponent } from './footer/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopnavbarComponent, SideNavbarComponent, FooterComponent],
  exports: [TopnavbarComponent, SideNavbarComponent, FooterComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
