import { Route } from '@angular/router';
export const fallBackRoute: Route = {
  path: '**',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}
