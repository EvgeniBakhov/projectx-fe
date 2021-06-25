import { Component, OnInit } from '@angular/core';
import {Estate} from '../../model/estate';

@Component({
  selector: 'fest-finder-estates-dashboard',
  templateUrl: './estates-dashboard.component.html',
  styleUrls: ['./estates-dashboard.component.scss']
})
export class EstatesDashboardComponent implements OnInit {

  estates: Estate[];

  constructor() { }

  ngOnInit(): void {
    this.estates = [];
  }

}
