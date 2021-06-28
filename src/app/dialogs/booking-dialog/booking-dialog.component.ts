import {Component, Input, OnInit} from '@angular/core';
import {Estate} from '../../model/estate';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'fest-finder-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {

  @Input()
  estate: Estate;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }

}
