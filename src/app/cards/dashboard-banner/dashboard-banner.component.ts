import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-dashboard-banner',
  templateUrl: './dashboard-banner.component.html',
  styleUrls: ['./dashboard-banner.component.scss']
})
export class DashboardBannerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToEvents(): void {
    this.router.navigate(['/events']);
  }
}
