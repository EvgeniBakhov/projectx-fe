import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Reservation} from '../model/reservation';
import {ReservationService} from '../service/reservation.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationDetailsResolver implements Resolve<Reservation> {

  constructor(private reservationService: ReservationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reservation> {
    return this.reservationService.getReservationById(+route.paramMap.get('id'));
  }
}
