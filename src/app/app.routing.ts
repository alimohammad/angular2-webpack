import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  // App Views
  { path: '', component: HomeComponent },
  {path: 'home',    component: HomeComponent },

  // Handle all other routes
  {path: '**',    component: HomeComponent }
];