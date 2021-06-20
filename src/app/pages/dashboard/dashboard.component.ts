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
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
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
