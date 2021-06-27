import { Component, OnInit } from '@angular/core';
import {Form, FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {EventService} from '../../service/event.service';

@Component({
  selector: 'fest-finder-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})
export class EventSearchComponent implements OnInit {

  cities: string[];
  ctrlCities: FormControl;
  filteredCities: Observable<any>;

  constructor(private eventService: EventService){ }

  ngOnInit() {
    this.ctrlCities = new FormControl();

    this.eventService.getCities().subscribe(cities => {
      this.cities = cities;
      this.filteredCities = this.ctrlCities.valueChanges.pipe(startWith(''),
          map(city => city ? this.filterCities(city) : this.cities.slice()));
    });
  }

  filterCities(name: string) {
    return this.cities.filter(city =>
        city.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
