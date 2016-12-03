import { Route } from '@angular/router';
import { PropertyComponent } from './index';

export const PropertyRoutes: Route[] = [
  {
    path: '',
    component: PropertyComponent
  },
  {
    path: '/property/add',
    component: PropertyComponent
  }
];

