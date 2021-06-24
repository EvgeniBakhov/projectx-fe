import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../auth/services/auth.service';
import {Event} from '../../model/event';

@Component({
  selector: 'fest-finder-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent implements OnInit {
  @Input()
  event: Event;

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
    });
  }

}
