import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../model/reservation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  private readonly BASE_URL = 'http://localhost:8080/reservation';

  getReservationsByUser(user: User): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.BASE_URL + `/${user.id}`);
  }

  createReservation(eventId: number): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.BASE_URL}/${eventId}`, {});
  }

  cancelReservation(reservationId: number) {
    return this.http.get(this.BASE_URL + `/${reservationId}/cancel`);
  }

  getReservationsForCurrentUser(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.BASE_URL);
  }

  getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.BASE_URL}/${id}`);
  }
}
