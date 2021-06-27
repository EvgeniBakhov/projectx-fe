import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../auth/services/auth.service';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {UserPicturePickerComponent} from '../../dialogs/user-picture-picker/user-picture-picker.component';
import {UserEditDialogComponent} from '../../dialogs/user-edit-dialog/user-edit-dialog.component';
import {BookingDialogComponent} from '../../dialogs/booking-dialog/booking-dialog.component';

@Component({
  selector: 'fest-finder-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  authenticatedUser: User;
  profileUser: User;
  editPermitted: boolean;
  userPicture: any;

  constructor(private authService: AuthService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe( user => {
      this.profileUser = user;
      this.authService.getAuthenticatedUser().subscribe(authUser => {
        this.authenticatedUser = authUser;
        this.editPermitted = (user.id === this.authenticatedUser.id);
      });
      this.userPicture = this.userService.getPicture(this.profileUser.id).subscribe(data => {
        this.createImageFromBlob(data);
      });
    });
  }

  private createImageFromBlob(data: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.userPicture = reader.result;
    }, false);

    if (data) {
      reader.readAsDataURL(data);
    }
  }

  openUploadDialog() {
    this.dialog.open(UserPicturePickerComponent);
  }

  openEditUserDialog() {
    const dialogRef = this.dialog.open(UserEditDialogComponent);
    const instance = dialogRef.componentInstance;
    instance.user = this.authenticatedUser;
  }
}
