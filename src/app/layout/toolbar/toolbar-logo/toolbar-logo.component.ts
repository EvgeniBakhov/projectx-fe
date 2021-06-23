import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-toolbar-logo',
  templateUrl: './toolbar-logo.component.html',
  styleUrls: ['./toolbar-logo.component.scss']
})
export class ToolbarLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard(): void {
    this.router.navigate(['']);
  }
}
