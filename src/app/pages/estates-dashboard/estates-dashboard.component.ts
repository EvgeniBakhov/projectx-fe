import { Component, OnInit } from '@angular/core';
import {Estate} from '../../model/estate';
import {EstateService} from '../../service/estate.service';
import {Event} from '../../model/event';
import {User} from '../../model/user';
import {AuthService} from '../../auth/services/auth.service';
import {PictureService} from '../../service/picture.service';

@Component({
  selector: 'fest-finder-estates-dashboard',
  templateUrl: './estates-dashboard.component.html',
  styleUrls: ['./estates-dashboard.component.scss']
})
export class EstatesDashboardComponent implements OnInit {

  estates: Estate[];
  user: User;

  constructor(private estateService: EstateService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(user => {
      this.user = user;
      this.estateService
          .getAllEstatesWithFilters(user.address.city, '', 0, 20, 0, 10000, 0, 10000)
          .subscribe( estates => {
        this.estates = estates;
      });
    });
  }

  loadEstates(estates: Estate[]): void {
    this.estates = estates;
  }
}
