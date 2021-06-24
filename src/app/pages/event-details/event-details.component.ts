import {Component, OnInit} from '@angular/core';
import {AgeRestriction} from '../../model/enums/age-restriction';
import {EventType} from '../../model/enums/event-type';
import {EventStatus} from '../../model/enums/event-status';
import {Event} from '../../model/event';
import {PlaceType} from '../../model/enums/place-type';
import {UserType} from '../../model/enums/user-type';

@Component({
  selector: 'fest-finder-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: Event;

  constructor() { }

  public eventMock: Event = {
    id : 123,
    name: 'Cinema festival',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    startDate: new Date('2021-07-10'),
    endDate: new Date('2021-07-11'),
    capacity: 1000,
    availableSeats: 1000,
    ageRestrictions: AgeRestriction.ADULT,
    address: {
      id: 13,
      region: 'Europe',
      country: 'Italy',
      city: 'Milan',
      street: 'Unnamed road 101'
    },
    organizer: {
      id: 1,
      username: 'john012',
      firstName: 'Dmitry',
      lastName: 'Gordon',
      age: 25,
      email: 'barak_obama@gmail.com',
      phone: '8-800-555-35-35',
      type: UserType.ORGANIZER,
      picture: 'assets/mock/user-mock/download.jpg',
      address: {
        id: 123,
        region: 'Europe',
        country: 'United Kingdom',
        city: 'London',
        street: 'Baker street 291'
      }
    },
    placeType: PlaceType.ONLINE,
    type: EventType.FESTIVAL,
    status: EventStatus.RIGHT_NOW,
    pictures: ['./assets/mock/event_pictures/1.jpeg', './assets/mock/event_pictures/2.jpeg', './assets/mock/event_pictures/3.jpeg', './assets/mock/event_pictures/4.jpg'],
    thumbnail: './assets/mock/event-example-2.jpeg'
  };

  ngOnInit(): void {
    this.event = this.eventMock;
  }

}
