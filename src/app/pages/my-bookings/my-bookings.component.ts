import {Component, Input, OnInit} from '@angular/core';
import {ListColumn} from '../../../@fury/shared/list/list-column.model';

@Component({
  selector: 'fest-finder-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Image', property: 'image', visible: true },
    { name: 'Name', property: 'name', visible: true, isModelProperty: true },
    { name: 'First Name', property: 'firstName', visible: false, isModelProperty: true },
    { name: 'Last Name', property: 'lastName', visible: false, isModelProperty: true },
    { name: 'Street', property: 'street', visible: true, isModelProperty: true },
    { name: 'Zipcode', property: 'zipcode', visible: true, isModelProperty: true },
    { name: 'City', property: 'city', visible: true, isModelProperty: true },
    { name: 'Phone', property: 'phoneNumber', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
