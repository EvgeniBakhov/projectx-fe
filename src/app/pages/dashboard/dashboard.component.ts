import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Event} from '../../model/event';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'fest-finder-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  topEvent: Event;
  eventSuggestions: Event[];

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventSuggestions = [];
    this.eventService.getTopEvent().subscribe(event => {
      this.topEvent = event;
    });
  }
}
