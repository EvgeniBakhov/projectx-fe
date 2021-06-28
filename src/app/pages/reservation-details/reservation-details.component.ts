import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from '../../model/reservation';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../service/event.service';
import {IpService} from '../../ip/ip.service';

@Component({
  selector: 'fest-finder-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {

  reservation: Reservation;
  thumbnail: any;
  stamp: string;
  reservationUrl: string;
  qrVisible = false;

  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService, private ipService: IpService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: {reservation: Reservation}) => {
      this.reservation = data.reservation;
      this.stamp = this.getStampUrl(this.reservation.status.toString());
      this.eventService.getThumbnail(this.reservation.event.id).subscribe(image => {
        if (image.size === 0) {
          this.createImageFromBlob(image);
        }
      });
      this.ipService.getIp().subscribe((resp: any) => {
        this.reservationUrl = `${resp.ip}:4200/reservation/${this.reservation.id}`;
      });
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

  getStampUrl(status: string) {
    switch (status) {
      case 'CREATED': return 'assets/img/icons/svg/reservation-stamp.svg';
      case 'APPROVED': return 'assets/img/icons/svg/confirmed-stamp.svg';
      case 'CANCELLED': return 'assets/img/icons/svg/cancelled-stamp.svg';
    }
  }

  toggleQrCode() {
    this.qrVisible = true;
  }
}
