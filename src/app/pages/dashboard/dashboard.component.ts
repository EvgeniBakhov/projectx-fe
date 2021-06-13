import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import {AgeRestriction} from '../../model/enums/age-restriction';
import {EventType} from '../../model/enums/event-type';
import {EventStatus} from '../../model/enums/event-status';

@Component({
  selector: 'fest-finder-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private router: Router) {
    /**
     * Edge wrong drawing fix
     * Navigate anywhere and on Promise right back
     */
    if (/Edge/.test(navigator.userAgent)) {
      if (DashboardComponent.isInitialLoad) {
        this.router.navigate(['/apps/chat']).then(() => {
          this.router.navigate(['/']);
        });

        DashboardComponent.isInitialLoad = false;
      }
    }

  }

  private static isInitialLoad = true;

  public eventMock = {
    id : '123',
    name: 'Cinema festival',
    description: 'Wonderful event!',
    startDate: '10/07/2021, 11:30:36 AM',
    endDate: '11/07/2021, 11:30:36 AM',
    capacity: 1000,
    availableSeats: 1000,
    ageRestrictions: AgeRestriction.ADULT,
    address: {
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

  ngOnInit(): void {
  }
}
