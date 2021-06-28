import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Estate} from '../../model/estate';
import {EstateService} from '../../service/estate.service';

@Component({
  selector: 'fest-finder-estate-search',
  templateUrl: './estate-search.component.html',
  styleUrls: ['./estate-search.component.scss']
})
export class EstateSearchComponent implements OnInit {
  @Output() searchEstate = new EventEmitter<Estate[]>();

  form: FormGroup;

  cities: string[];
  types = [
    'HOUSE',
    'APARTMENT',
    'STUDIO',
    'ROOM',
    'HOSTEL',
    'PART_HOUSE',
    'FLOOR_OF_HOUSE',
    'HOTEL'
  ];
  beds: number[];
  ctrlCities: FormControl;
  ctrlTypes: FormControl;
  filteredCities: Observable<string[]>;
  filteredTypes: Observable<string[]>;


  constructor(private estateService: EstateService, private fb: FormBuilder) { }

  ngOnInit() {
    this.beds = Array(19).fill(1).map((x, i) => i + 1);
    this.ctrlCities = new FormControl();
    this.ctrlTypes = new FormControl();

    this.form = this.fb.group({
      city : [''],
      type: [''],
      minBeds: ['1'],
      maxBeds: ['19'],
      minPrice: ['0'],
      maxPrice: ['10000'],
      minArea: ['0'],
      maxArea: ['10000']
    });

    this.filteredTypes = this.ctrlTypes.valueChanges.pipe(startWith(''),
        map(type => type ? this.filterTypes(type) : this.types.slice()));

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

  filterTypes(typeName: string) {
    return this.types.filter(type => type.toLowerCase().indexOf(typeName.toLowerCase()) === 0);
  }

  send() {
    this.estateService.getAllEstatesWithFilters (
        this.form.get('city').value,
        this.form.get('type').value,
        this.form.get('minBeds').value,
        this.form.get('maxBeds').value,
        this.form.get('minArea').value,
        this.form.get('maxArea').value,
        this.form.get('minPrice').value,
        this.form.get('maxPrice').value
        ).subscribe(estates => {
      this.searchEstate.emit(estates);
    });
  }
}
