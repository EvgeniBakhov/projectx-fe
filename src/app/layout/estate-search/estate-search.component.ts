import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {EstateService} from '../../service/estate.service';

@Component({
  selector: 'fest-finder-estate-search',
  templateUrl: './estate-search.component.html',
  styleUrls: ['./estate-search.component.scss']
})
export class EstateSearchComponent implements OnInit {

  cities: string[];
  ctrlCities: FormControl;
  filteredCities: Observable<any>;

  constructor(private estateService: EstateService) { }

  ngOnInit() {
    this.ctrlCities = new FormControl();
    this.estateService.getCities().subscribe(cities => {
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
