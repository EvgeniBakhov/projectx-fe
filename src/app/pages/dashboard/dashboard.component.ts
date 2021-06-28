import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Event} from '../../model/event';
import {EventService} from '../../service/event.service';
import {User} from '../../model/user';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'fest-finder-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input()
  user: User;

  topEvent: Event;
  eventSuggestions: Event[];

  constructor(private router: Router, private eventService: EventService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
      this.eventService.getTopEvent().subscribe(event => {
        this.topEvent = event;
      });
      this.eventService.getAllEventsWithFilters(user.address.city, '', '', '', '')
          .subscribe(response => {
            this.eventSuggestions = response;
          });
    });
  }
}
