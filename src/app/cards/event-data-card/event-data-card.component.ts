import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {EventStatus} from '../../model/enums/event-status';
import {MatDialog} from '@angular/material/dialog';
import {ReservationDialogComponent} from '../../dialogs/reservation-dialog/reservation-dialog.component';

@Component({
  selector: 'fest-finder-event-data-card',
  templateUrl: './event-data-card.component.html',
  styleUrls: ['./event-data-card.component.scss']
})
export class EventDataCardComponent implements OnInit {
  @Input() event: Event;
  @Input() thumbnail: File;

  dataLoaded: boolean;
  placeTypeIcon: string;
  placeTypeText: string;
  eventTypeIcon: string;
  eventTypeText: string;
  chipText: string;

  constructor(private dialog: MatDialog) { }



  ngOnInit(): void {
    this.dataLoaded = false;
    this.placeTypeIcon = this.getPlaceTypeIcon(this.event.placeType.toString());
    this.placeTypeText = this.getPlaceTypeText(this.event.placeType.toString());
    this.eventTypeIcon = this.getEventTypeIcon(this.event.type.toString());
    this.eventTypeText = this.getEventTypeText(this.event.type.toString());
    this.chipText = this.getChipText(this.event.status);
    this.dataLoaded = true;
  }

  getPlaceTypeIcon(placeType: string): string {
    switch (placeType) {
      case 'INDOOR': return 'meeting_room';
      case 'ONLINE': return 'devices';
      case 'OPEN_AIR': return 'nature';
    }
  }

  getPlaceTypeText(placeType: string): string {
    switch (placeType) {
      case 'INDOOR': return 'INDOOR';
      case 'ONLINE': return 'ONLINE';
      case 'OPEN_AIR': return 'OPEN AIR';
    }
  }

  getEventTypeIcon(eventType: string): string {
    switch (eventType) {
      case 'CONCERT': return 'music_note';
      case 'FESTIVAL': return 'celebration';
      case 'CULTURE_ACTIVITY': return 'theater_comedy';
      case 'HOUSE_PARTY': return 'food_bank';
      case 'MEETING': return 'groups';
      case 'PARK_ACTIVITY': return 'park';
      case 'PICNIC': return 'outdoor_grill';
      case 'PRESENTATION': return 'slideshow';
      case 'SHOW': return 'visibility';
      case 'SPORTS_ACTIVITY': return 'directions_run';
      case 'OTHER': return 'pending';
      default: return 'pending';
    }
  }

  getEventTypeText(eventType: string): string {
    switch (eventType) {
      case 'CONCERT':
        return 'CONCERT';
      case 'FESTIVAL':
        return 'FESTIVAL';
      case 'CULTURE_ACTIVITY':
        return 'CULTURE ACTIVITY';
      case 'HOUSE_PARTY':
        return 'HOUSE PARTY';
      case 'MEETING':
        return 'MEETING';
      case 'PARK_ACTIVITY':
        return 'PARK ACTIVITY';
      case 'PICNIC':
        return 'PICNIC';
      case 'PRESENTATION':
        return 'PRESENTATION';
      case 'SHOW':
        return 'SHOW';
      case 'SPORTS_ACTIVITY':
        return 'SPORTS ACTIVITY';
      case 'OTHER':
        return 'OTHER';
      default:
        return 'OTHER';
    }
  }

  private getChipText(status: EventStatus) {
    switch (status) {
      case EventStatus.PLANNED: return 'PLANNED';
      case EventStatus.POSTPONED: return 'POSTPONED';
      case EventStatus.RIGHT_NOW: return 'RIGHT NOW';
      case EventStatus.CANCELLED: return 'CANCELLED';
    }
  }

  openReservationDialog() {
    const dialogRef = this.dialog.open(ReservationDialogComponent);
    const instance = dialogRef.componentInstance;
    instance.event = this.event;
    instance.thumbnail = this.thumbnail;
  }
}
