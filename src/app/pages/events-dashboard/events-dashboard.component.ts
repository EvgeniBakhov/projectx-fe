import { Component, OnInit } from '@angular/core';
import {Event} from '../../model/event';

@Component({
  selector: 'fest-finder-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.scss']
})
export class EventsDashboardComponent implements OnInit {

  events: Event[];

  constructor() { }

  ngOnInit(): void {
    this.events = [];
  }

}
