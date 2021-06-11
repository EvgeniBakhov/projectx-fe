import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {EventStatus} from '../../model/enums/event-status';

@Component({
  selector: 'fest-finder-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input()
  event: Event;

  dotColor: string;

  constructor() { }

  ngOnInit(): void {
    this.dotColor = this.getDotColor();
  }

  private getDotColor(): string {
    switch (this.event.status) {
      case EventStatus.PLANNED: return 'bluedot';
      case EventStatus.CANCELLED: return 'reddot';
      case EventStatus.POSTPONED: return 'orangedot';
      case EventStatus.RIGHT_NOW: return 'greendot';
    }
  }
}
