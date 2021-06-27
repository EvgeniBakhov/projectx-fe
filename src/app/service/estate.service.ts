import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Estate} from '../model/estate';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  private readonly BASE_URL = 'http://localhost:8080/estate';

  constructor(private http: HttpClient) { }

  getEstateById(id: number): Observable<Estate> {
    return this.http.get<Estate>(`${this.BASE_URL}/${id}`);
  }

  getCities(): Observable<string[]> {
    return this.http.get<string[]>(`${this.BASE_URL}/cities`);
  }
}
