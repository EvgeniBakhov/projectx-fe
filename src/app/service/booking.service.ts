import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Booking} from '../model/booking';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getBookingById (id: number) {
    return this.http.get<Booking>(`http://localhost:8080/booking/${id}`);
  }

  getBookingsByUser(user: User): Observable<Booking[]> {
    return this.http.get<Booking[]>(`http://localhost:8080/booking/user/${user.id}`);
  }

  createBooking(estateId: number, bookingRequest: Booking): Observable<Booking> {
    return this.http.post<Booking>(`http://localhost:8080/booking/${estateId}`, bookingRequest);
  }

  cancelBooking(bookingId: number) {
    return this.http.get(`http://localhost:8080/booking/${bookingId}/cancel`);
  }
}
