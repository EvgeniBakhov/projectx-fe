import {Component, Input, OnInit} from '@angular/core';
import {Estate} from '../../model/estate';

@Component({
  selector: 'fest-finder-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {

  @Input()
  estate: Estate;

  constructor() { }

  ngOnInit(): void {
  }

}
