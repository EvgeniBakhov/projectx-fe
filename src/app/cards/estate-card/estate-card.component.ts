import {Component, Input, OnInit} from '@angular/core';
import {Estate} from '../../model/estate';
import {EstateType} from '../../model/enums/estate-type';
import {Router} from '@angular/router';
import {UserType} from '../../model/enums/user-type';

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
    owner: {
      id: 1,
      username: 'john012',
      firstName: 'John',
      lastName: 'Smith',
      age: 25,
      email: 'example@gmail.com',
      phone: '+355-453-13-65',
      type: UserType.ORGANIZER,
      picture: 'assets/mock/user-mock/profile.jpg',
      address: {
        id: 123,
        region: 'Europe',
        country: 'United Kingdom',
        city: 'London',
        street: 'Baker street 291'
      }
    },
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
