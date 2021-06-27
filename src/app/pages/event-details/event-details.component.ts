import {Component, OnInit} from '@angular/core';
import {AgeRestriction} from '../../model/enums/age-restriction';
import {EventType} from '../../model/enums/event-type';
import {EventStatus} from '../../model/enums/event-status';
import {Event} from '../../model/event';
import {PlaceType} from '../../model/enums/place-type';
import {UserType} from '../../model/enums/user-type';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'fest-finder-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { event: Event }) => {
      this.event = data.event;
    });
    // this.eventService.getEventById(this.id).subscribe(event => {
    //   this.event = event;
    // });
  }
}
