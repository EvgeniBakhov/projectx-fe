import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent implements OnInit {

  @Input()
  user: User;

  picture: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.picture = this.userService.getPicture(this.user.id).subscribe(data => {
      if (data.size !== 0) {
        this.createImageFromBlob(data);
      }
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

    navigateToProfile() {
      this.router.navigate([`/profile/${this.user.id}`]);
    }
}
