import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../auth/services/auth.service';
import {Event} from '../../model/event';
import {IpService} from '../../ip/ip.service';

@Component({
  selector: 'fest-finder-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent implements OnInit {
  @Input()
  event: Event;

  user: User;
  reservationUrl: string;

  constructor(private authService: AuthService, private ipService: IpService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
    });
    this.ipService.getIp().subscribe((response: any) => {
      this.reservationUrl = response.ip + ':4200/my-reservations';
    });
  }

}
