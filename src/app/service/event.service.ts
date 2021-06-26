import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Event} from '../model/event';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getTopEvent(): Observable<Event> {
    return this.http.get<Event>('http://localhost:8080/event/top');
  }

  getThumbnail(id: number): Observable<Blob> {
    return this.http.get(`http://localhost:8080/event/${id}/thumbnail`, { responseType: 'blob'});
  }
}
