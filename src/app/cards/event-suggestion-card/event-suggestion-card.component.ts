import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {EventService} from '../../service/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-event-suggestion-card',
  templateUrl: './event-suggestion-card.component.html',
  styleUrls: ['./event-suggestion-card.component.scss']
})
export class EventSuggestionCardComponent implements OnInit {
  @Input()
  event: Event;

  thumbnail: any;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.getThumbnail(this.event.id).subscribe(data => {
      if (data.size !== 0) {
        this.createImageFromBlob(data);
      }
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

  navigateToEvent() {
    this.router.navigate([`event/${this.event.id}`]);
  }
}
