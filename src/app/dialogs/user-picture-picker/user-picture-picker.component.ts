import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-user-picture-picker',
  templateUrl: './user-picture-picker.component.html',
  styleUrls: ['./user-picture-picker.component.scss']
})
export class UserPicturePickerComponent implements OnInit {

  selectedFile: File;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('picture', this.selectedFile, this.selectedFile.name);
    this.userService.uploadPicture(uploadImageData).subscribe( response => {
      this.reloadComponent();
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  private reloadComponent() {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
