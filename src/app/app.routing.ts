import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';

export const ROUTES: Routes = [
  // App Views
  { path: 'home', component: HomeComponent },
  { path: 'property', component: PropertyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
