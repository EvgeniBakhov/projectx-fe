import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Estate} from '../../model/estate';
import {MatDialog} from '@angular/material/dialog';
import {BookingDialogComponent} from '../../dialogs/booking-dialog/booking-dialog.component';

@Component({
  selector: 'fest-finder-estate-data-card',
  templateUrl: './estate-data-card.component.html',
  styleUrls: ['./estate-data-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstateDataCardComponent implements OnInit {
  @Input()
  estate: Estate;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openBookingDialog() {
    const dialogRef = this.dialog.open(BookingDialogComponent);
    const instance = dialogRef.componentInstance;
    instance.estate = this.estate;
  }

}
