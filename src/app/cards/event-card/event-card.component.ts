import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
      if (!(data.size === 0)) {
        this.createImageFromBlob(data);
      }
    });
  }

  private createImageFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.thumbnail = reader.result;
      console.log(this.thumbnail);
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
  }

  private getDotColor(): string {
    switch (this.event.status.toString()) {
      case 'PLANNED': return 'bluedot';
      case 'CANCELLED': return 'reddot';
      case 'POSTPONED': return 'orangedot';
      case 'RIGHT_NOW': return 'greendot';
    }
  }

  eventClick(): void {
    this.router.navigate(['./event/' + this.event.id]);
  }
}
