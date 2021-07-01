import {Component, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../service/event.service';
import {PictureService} from '../../service/picture.service';

@Component({
  selector: 'fest-finder-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  thumbnail: any;
  pictures = [];

  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService, private pictureService: PictureService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { event: Event }) => {
      this.event = data.event;
      this.eventService.getThumbnail(this.event.id).subscribe(image => {
        this.createThumbnailFromBlob(image);
      });
      this.loadPictures();
    });
  }

  private createThumbnailFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.thumbnail = reader.result;
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
  }

  private loadPictures() {
    for (const picture of this.event.pictures) {
      this.pictureService.getPicture(picture).subscribe( data => {
        this.createPictureFromBlob(data);
      });
    }
  }

  private createPictureFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.pictures.push(reader.result);
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
  }
}
