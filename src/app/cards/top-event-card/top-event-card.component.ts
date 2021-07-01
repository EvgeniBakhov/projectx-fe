import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../service/event.service';
import {Event} from '../../model/event';

@Component({
  selector: 'fest-finder-top-event-card',
  templateUrl: './top-event-card.component.html',
  styleUrls: ['./top-event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopEventCardComponent implements OnInit {
  @Input() event: Event;

  eventThumbnail: any;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getThumbnail(this.event.id).subscribe( thumbnail => {
      if (thumbnail.size !== 0) {
        this.createImageFromBlob(thumbnail);
      }
    });
  }

  private createImageFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.eventThumbnail = reader.result;
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
  }

  learnMoreClick(): void {
    this.router.navigate(['/event/' + this.event.id]);
  }
}
