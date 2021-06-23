import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {EventDetailsComponent} from './pages/event-details/event-details.component';
import {EstateDetailsComponent} from './pages/estate-details/estate-details.component';
import {MyBookingsComponent} from './pages/my-bookings/my-bookings.component';
import {MyReservationsComponent} from './pages/my-reservations/my-reservations.component';
import {AuthGuard} from './auth/guards/auth.guard';
import {EventsDashboardComponent} from './pages/events-dashboard/events-dashboard.component';
import {EstatesDashboardComponent} from './pages/estates-dashboard/estates-dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/authentication/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'event/:id',
        component: EventDetailsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'estate/:id',
        component: EstateDetailsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my-bookings',
        component: MyBookingsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my-reservations',
        component: MyReservationsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'events',
        component: EventsDashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'estates',
        component: EstatesDashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        pathMatch: 'full',
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
