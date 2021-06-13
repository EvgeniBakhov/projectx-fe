import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output()
  cardEmitter: EventEmitter<number> = new EventEmitter<number>();

  dotColor: string;

  constructor() { }

  ngOnInit(): void {
    this.dotColor = this.getDotColor();
  }

  onClick(): void {
    this.cardEmitter.emit(this.event.id);
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
