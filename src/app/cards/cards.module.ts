import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstateCardComponent} from './estate-card/estate-card.component';
import {EventCardComponent} from './event-card/event-card.component';
import {MatCardModule} from '@angular/material/card';
import {AddressPipe} from '../pipes/address.pipe';
import {MatIconModule} from '@angular/material/icon';
import {PegiRatingPipe} from '../pipes/pegi-rating.pipe';
import { TopEventCardComponent } from './top-event-card/top-event-card.component';

@NgModule({
  declarations: [
    EstateCardComponent,
    EventCardComponent,
    AddressPipe,
    PegiRatingPipe,
    TopEventCardComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatIconModule
  ],
  exports: [ EstateCardComponent, EventCardComponent]
})
export class CardsModule { }
