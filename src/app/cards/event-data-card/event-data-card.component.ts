import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {CanColor, ThemePalette} from '@angular/material/core';
import {EventStatus} from '../../model/enums/event-status';
import {Color} from '../../pages/apps/inbox/shared/color.interface';
import {PlaceType} from '../../model/enums/place-type';
import {EventType} from '../../model/enums/event-type';
import {MatDialog} from '@angular/material/dialog';
import {ReservationDialogComponent} from '../../dialogs/reservation-dialog/reservation-dialog.component';

@Component({
  selector: 'fest-finder-event-data-card',
  templateUrl: './event-data-card.component.html',
  styleUrls: ['./event-data-card.component.scss']
})
export class EventDataCardComponent implements OnInit {
  @Input()
  event: Event;

  chipColor: Color;
  placeTypeIcon: string;
  placeTypeText: string;
  eventTypeIcon: string;
  eventTypeText: string;
  chipText: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.placeTypeIcon = this.getPlaceTypeIcon(this.event.placeType);
    this.placeTypeText = this.getPlaceTypeText(this.event.placeType);
    this.eventTypeIcon = this.getEventTypeIcon(this.event.type);
    this.eventTypeText = this.getEventTypeText(this.event.type);
    this.chipColor = this.getChipColor(this.event.status);
    this.chipText = this.getChipText(this.event.status);
  }

  getPlaceTypeIcon(placeType: PlaceType): string {
    switch (placeType) {
      case PlaceType.INDOOR: return 'meeting_room';
      case PlaceType.ONLINE: return 'devices';
      case PlaceType.OPEN_AIR: return 'nature';
    }
  }

  getPlaceTypeText(placeType: PlaceType): string {
    switch (placeType) {
      case PlaceType.INDOOR: return 'INDOOR';
      case PlaceType.ONLINE: return 'ONLINE';
      case PlaceType.OPEN_AIR: return 'OPEN AIR';
    }
  }

  getEventTypeIcon(eventType: EventType): string {
    switch (eventType) {
      case EventType.CONCERT: return 'music_note';
      case EventType.FESTIVAL: return 'celebration';
      case EventType.CULTURE_ACTIVITY: return 'theater_comedy';
      case EventType.HOUSE_PARTY: return 'food_bank';
      case EventType.MEETING: return 'groups';
      case EventType.PARK_ACTIVITY: return 'park';
      case EventType.PICNIC: return 'outdoor_grill';
      case EventType.PRESENTATION: return 'slideshow';
      case EventType.SHOW: return 'visibility';
      case EventType.SPORTS_ACTIVITY: return 'directions_run';
      case EventType.OTHER: return 'pending';
      default: return 'pending';
    }
  }

  getEventTypeText(eventType: EventType): string {
    switch (eventType) {
      case EventType.CONCERT:
        return 'CONCERT';
      case EventType.FESTIVAL:
        return 'FESTIVAL';
      case EventType.CULTURE_ACTIVITY:
        return 'CULTURE ACTIVITY';
      case EventType.HOUSE_PARTY:
        return 'HOUSE PARTY';
      case EventType.MEETING:
        return 'MEETING';
      case EventType.PARK_ACTIVITY:
        return 'PARK ACTIVITY';
      case EventType.PICNIC:
        return 'PICNIC';
      case EventType.PRESENTATION:
        return 'PRESENTATION';
      case EventType.SHOW:
        return 'SHOW';
      case EventType.SPORTS_ACTIVITY:
        return 'SPORTS ACTIVITY';
      case EventType.OTHER:
        return 'OTHER';
      default:
        return 'OTHER';
    }
  }

  private getChipColor(status: EventStatus): Color {
    switch (status) {
      case EventStatus.PLANNED: return {name: 'planned', code: '2879F2'};
      case EventStatus.POSTPONED: return {name: 'postponed', code: 'F2A128'};
      case EventStatus.RIGHT_NOW: return {name: 'right_now', code: '2B8834'};
      case EventStatus.CANCELLED: return {name: 'cancelled', code: 'BC1A1A'};
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
  }
}
