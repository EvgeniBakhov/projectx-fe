import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPicture(id: number): Observable<Blob> {
    return this.http.get(`http://localhost:8080/user/${id}/picture`, { responseType: 'blob'});
  }
}
