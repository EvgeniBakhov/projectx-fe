import { Component, OnInit } from '@angular/core';
import {Form, FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'fest-finder-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})
export class EventSearchComponent implements OnInit {

  cities: string[];
  ctrlCities: FormControl;
  filteredCities: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.ctrlCities = new FormControl();

    this.cities = this.citiesMock();
    this.filteredCities = this.ctrlCities.valueChanges.pipe(startWith(''),
        map(city => city ? this.filterCities(city) : this.cities.slice()));
  }

  filterCities(name: string) {
    return this.cities.filter(city =>
        city.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  private citiesMock() {
    return ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'New York', 'Boston', 'Los Angeles', 'Kyiv', 'Kharkiv', 'Odesa', 'Dnipro'];
  }
}
