import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../../model/event';
import {EventStatus} from '../../model/enums/event-status';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input()
  event: Event;

  dotColor: string;

  constructor(private router: Router) { }

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

  eventClick(): void {
    this.router.navigate(['./event/' + this.event.id]);
  }
}
