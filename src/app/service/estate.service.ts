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

  getAllEstatesWithFilters(city: string,
                           type: string,
                           minBeds: number,
                           maxBeds: number,
                           minArea: number,
                           maxArea: number,
                           minPrice: number,
                           maxPrice: number): Observable<Estate[]> {
    return this.http.get<Estate[]>(`${this.BASE_URL}/all`, {
      params: {
        city: city,
        type: type,
        minBeds: minBeds.toString(),
        maxBeds: maxBeds.toString(),
        minArea: minArea.toString(),
        maxArea: maxArea.toString(),
        minPrice: minPrice.toString(),
        maxPrice: maxPrice.toString()
      }});
  }
}
