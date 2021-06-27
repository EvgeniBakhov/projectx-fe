import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Event} from '../model/event';
import {EventService} from '../service/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsResolver implements Resolve<Event> {

  constructor(private service: EventService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Event> {
    return this.service.getEventById(+route.paramMap.get('id'));
  }
}
