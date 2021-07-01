import {Component, Input, OnInit} from '@angular/core';
import {Estate} from '../../model/estate';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookingService} from '../../service/booking.service';
import {Booking} from '../../model/booking';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'fest-finder-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {

  @Input()
  estate: Estate;

  form: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: BookingService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }

  calculateSum(): number {
    const startDate = new Date(this.form.controls.start.value);
    const endDate = new Date(this.form.controls.end.value);
    return (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) * this.estate.rentPrice;
  }

  createBooking() {
    const booking = new Booking(new Date(this.form.controls.start.value), new Date(this.form.controls.end.value));
    this.bookingService.createBooking(this.estate.id, booking).subscribe( data => {
      this.snackbar.open(`Booking with id ${data.id} created.`);
    }, () => {
      this.snackbar.open(`Error creating booking.`);
    });
  }
}
