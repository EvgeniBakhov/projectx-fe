import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../../model/user';
import {UserType} from '../../../model/enums/user-type';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'fury-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  public readonly ORGANIZER = UserType.ORGANIZER;
  public readonly OWNER = UserType.OWNER;
  public readonly NORMAL = UserType.NORMAL;

  isOpen: boolean;
  user: User;
  picture: any;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
      this.picture = this.userService.getPicture(user.id).subscribe(data => {
        this.createImageFromBlob(data);
      });
    });
  }

  private createImageFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.picture = reader.result;
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  goToProfile(): void {
    this.router.navigate([`/profile/${this.user.id}`]);
  }

  goToMyBookings(): void {
    this.router.navigate(['/my-bookings']);
  }

  goToMyReservations(): void {
    this.router.navigate(['/my-reservations']);
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
