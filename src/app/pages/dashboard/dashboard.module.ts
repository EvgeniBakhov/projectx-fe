import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../@fury/shared/material-components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { FurySharedModule } from '../../../@fury/fury-shared.module';
import {CardsModule} from '../../cards/cards.module';
import {LayoutModule} from '../../layout/layout.module';
import { EventsDashboardComponent } from './events-dashboard/events-dashboard.component';
import { EstatesDashboardComponent } from './estates-dashboard/estates-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule,
        FurySharedModule,
        CardsModule,
        LayoutModule
    ],
  declarations: [DashboardComponent, EventsDashboardComponent, EstatesDashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule {
}
