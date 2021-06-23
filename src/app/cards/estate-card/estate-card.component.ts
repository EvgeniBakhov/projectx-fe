import {Component, Input, OnInit} from '@angular/core';
import {Estate} from '../../model/estate';
import {EstateType} from '../../model/enums/estate-type';
import {Router} from '@angular/router';

@Component({
  selector: 'fest-finder-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.scss']
})
export class EstateCardComponent implements OnInit {

  estateMock: Estate = {
    id: 1,
    address: {id: 12, region: 'Europe', country: 'Italy', city: 'Rome', street: 'Unnamed road 150'},
    numOfBedrooms: 2,
    area: 134.34,
    type: EstateType.APARTMENT,
    name: 'Wonderful apartment',
    rentPrice: 50,
    owner: {},
    description: 'Really effortable apartment with fantastic view in peaceful place.',
    pictures: ['assets/img/estate_default.jpeg']
  };

  @Input()
  estate: Estate;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.estate = this.estateMock;
  }

  estateClick(): void {
    this.router.navigate(['./estate/' + this.estate.id]);
  }

}
