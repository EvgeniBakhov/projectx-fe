import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {EventService} from '../../service/event.service';
import {Event} from '../../model/event';

@Component({
  selector: 'fest-finder-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.scss']
})
export class EventSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<Event[]>();

  form: FormGroup;

  cities: string[];
  types = [
      'FESTIVAL',
    'CONCERT',
    'CULTURE_ACTIVITY',
    'HOUSE_PARTY',
    'MEETING',
    'OTHER',
    'PARK_ACTIVITY',
    'PICNIC',
    'PRESENTATION',
    'SHOW',
    'SPORTS_ACTIVITY'];
  places = ['OPEN_AIR', 'INDOOR', 'ONLINE'];
  ages = ['EVERYONE', 'EVERYONE_SEVEN_PLUS', 'TEEN', 'MATURE', 'ADULT'];
  ctrlCities: FormControl;
  ctrlTypes: FormControl;
  ctrlPlaces: FormControl;
  ctrlAges: FormControl;
  filteredCities: Observable<string[]>;
  filteredTypes: Observable<string[]>;
  filteredPlaces: Observable<string[]>;
  filteredAges: Observable<string[]>;

  constructor(private eventService: EventService, private fb: FormBuilder) { }

  ngOnInit() {
    this.ctrlCities = new FormControl();
    this.ctrlPlaces = new FormControl();
    this.ctrlTypes = new FormControl();
    this.ctrlAges = new FormControl();

    this.form = this.fb.group({
      city : [''],
      type: [''],
      place: [''],
      ageRestrictions: ['']
    });

    this.filteredTypes = this.ctrlTypes.valueChanges.pipe(startWith(''),
        map(type => type ? this.filterTypes(type) : this.types.slice()));
    this.filteredPlaces = this.ctrlPlaces.valueChanges.pipe(startWith(''),
        map(place => place ? this.filterPlaces(place) : this.places.slice()));
    this.filteredAges = this.ctrlPlaces.valueChanges.pipe(startWith(''),
        map(age => age ? this.filterAges(age) : this.ages.slice()));

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

  filterTypes(typeName: string) {
    return this.types.filter(type => type.toLowerCase().indexOf(typeName.toLowerCase()) === 0);
  }

  filterPlaces(placeTypeName: string) {
    return this.places.filter(placeType => placeType.toLowerCase().indexOf(placeTypeName.toLowerCase()) === 0);
  }

  filterAges(ageRestrictionName: string) {
    return this.places.filter(ageRestriction => ageRestriction.toLowerCase().indexOf(ageRestrictionName.toLowerCase()) === 0);
  }

  send() {
    this.eventService.getAllEventsWithFilters(
        this.form.get('city').value,
        this.form.get('type').value,
        this.form.get('place').value,
        '',
        this.form.get('ageRestrictions').value).subscribe(events => {
          this.searchEvent.emit(events);
    });
  }
}
