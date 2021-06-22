import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {EventsDashboardComponent} from './events-dashboard/events-dashboard.component';
import {EstatesDashboardComponent} from './estates-dashboard/estates-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'events',
        component: EventsDashboardComponent
      },
      {
        path: 'estates',
        component: EstatesDashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
