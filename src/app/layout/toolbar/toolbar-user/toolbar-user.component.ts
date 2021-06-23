import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fury-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  isOpen: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  goToProfile(): void {
    return;
  }

  goToMyBookings(): void {
    this.router.navigate(['my-bookings']);
  }

  goToMyReservations(): void {
    this.router.navigate(['/my-reservations']);
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
