import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstateCardComponent} from './estate-card/estate-card.component';
import {EventCardComponent} from './event-card/event-card.component';
import {MatCardModule} from '@angular/material/card';
import {AddressPipe} from '../pipes/address.pipe';
import {MatIconModule} from '@angular/material/icon';
import {PegiRatingPipe} from '../pipes/pegi-rating.pipe';
import { TopEventCardComponent } from './top-event-card/top-event-card.component';
import { UserInfoCardComponent } from './user-info-card/user-info-card.component';
import { EventDataCardComponent } from './event-data-card/event-data-card.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import { EventSuggestionCardComponent } from './event-suggestion-card/event-suggestion-card.component';
import { DashboardBannerComponent } from './dashboard-banner/dashboard-banner.component';

@NgModule({
  declarations: [
    EstateCardComponent,
    EventCardComponent,
    AddressPipe,
    PegiRatingPipe,
    TopEventCardComponent,
    UserInfoCardComponent,
    EventDataCardComponent,
    EventSuggestionCardComponent,
    DashboardBannerComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatChipsModule, MatButtonModule, SharedModule
  ],
    exports: [EstateCardComponent, EventCardComponent, UserInfoCardComponent, EventDataCardComponent, DashboardBannerComponent]
})
export class CardsModule { }
