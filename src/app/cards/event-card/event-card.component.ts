import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../../model/event';
import {EventStatus} from '../../model/enums/event-status';
import {Router} from '@angular/router';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'fest-finder-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input()
  event: Event;

  dotColor: string;
  thumbnail: any;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.dotColor = this.getDotColor();
    this.eventService.getThumbnail(this.event.id).subscribe(data => {
      this.createImageFromBlob(data);
    });
  }

  private createImageFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.thumbnail = reader.result;
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
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
