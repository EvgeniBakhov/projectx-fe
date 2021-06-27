import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Event} from '../model/event';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly BASE_URL = `http://localhost:8080/event`;

  constructor(private http: HttpClient) { }

  getTopEvent(): Observable<Event> {
    return this.http.get<Event>(`${this.BASE_URL}/top`);
  }

  getThumbnail(id: number): Observable<Blob> {
    return this.http.get(`${this.BASE_URL}/${id}/thumbnail`, { responseType: 'blob'});
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.BASE_URL}/${id}`);
  }

  getCities(): Observable<string[]> {
    return this.http.get<string[]>(`${this.BASE_URL}/cities`);
  }
}
