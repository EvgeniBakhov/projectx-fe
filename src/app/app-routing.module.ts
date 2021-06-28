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
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {EventDetailsResolver} from './resolvers/event-details.resolver';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {ReservationDetailsComponent} from './pages/reservation-details/reservation-details.component';
import {ReservationDetailsResolver} from './resolvers/reservation-details.resolver';

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
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: 'reservation/:id',
    component: ReservationDetailsComponent,
    resolve: { reservation : ReservationDetailsResolver }
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'event/:id',
        component: EventDetailsComponent,
        canActivate: [AuthGuard],
        resolve: { event: EventDetailsResolver }
      },
      {
        path: 'profile/:id',
        component: UserProfileComponent,
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
  },
  {
    path: '**',
    redirectTo: '/404'
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
  exports: [RouterModule],
  providers: [EventDetailsResolver]
})
export class AppRoutingModule {
}
