import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {EventService} from '../../service/event.service';
import {AuthService} from '../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

@Component({
  selector: 'fest-finder-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.scss']
})
export class EventsDashboardComponent implements OnInit {

  events: Event[];
  user: User;

  constructor(private eventService: EventService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
      this.eventService.getAllEventsWithFilters(user.address.city, '', '', '', '').subscribe( events => {
        this.events = events;
      });
    });
  }

    loadEvents(events: Event[]): void {
      this.events = events;
    }
}
