import { Component, OnInit } from '@angular/core';
import {AgeRestriction} from '../../../model/enums/age-restriction';
import {EventType} from '../../../model/enums/event-type';
import {EventStatus} from '../../../model/enums/event-status';
import {Event} from '../../../model/event';

@Component({
  selector: 'fest-finder-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.scss']
})
export class EventsDashboardComponent implements OnInit {

  public eventMock: {
    id: 123,
    name: 'Cinema festival',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    capacity: 1000,
    availableSeats: 1000,
    ageRestrictions: AgeRestriction.ADULT,
    address:  {
      region: 'Europe',
      country: 'Italy',
      city: 'Milan',
      street: 'Unnamed road 101'
    },
    organizer: { },
    type: EventType.FESTIVAL,
    status: EventStatus.RIGHT_NOW,
    pictures: [],
    thumbnail: './assets/mock/event-example-2.jpeg'
  };

  events: any[];

  constructor() { }

  ngOnInit(): void {
    this.populateEvents();
  }

  private populateEvents(): void {
    for (let i = 0; i < 10; i++) {
      this.events.push(this.eventMock);
    }
  }

}
