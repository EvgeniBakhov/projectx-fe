import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../auth/services/auth.service';
import {Event} from '../../model/event';
import {IpService} from '../../ip/ip.service';
import {ReservationService} from '../../service/reservation.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Reservation} from '../../model/reservation';

@Component({
  selector: 'fest-finder-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationDialogComponent implements OnInit {
  @Input() event: Event;
  @Input() thumbnail: File;

  user: User;
  reservationUrl: string;
  createdReservation: Reservation;
  qrVisible = false;

  constructor(private authService: AuthService,
              private ipService: IpService,
              private reservationService: ReservationService,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
      this.reservationService.createReservation(this.event.id).subscribe(response => {
        this.snackbar.open('Reservation successful');
        this.createdReservation = response;
        this.ipService.getIp().subscribe((resp: any) => {
          this.reservationUrl = `${resp.ip}:4200/reservation/${this.createdReservation.id}`;
        });
      }, (error) => {
        this.snackbar.open('Error acquired:' + error);
      });
    });
  }

  toggleQrCode() {
    this.qrVisible = true;
  }
}
