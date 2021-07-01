import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private readonly BASE_URL = 'http://localhost:8080/picture';

  constructor(private http: HttpClient) { }

  getPicture(url: string): Observable<Blob> {
    return this.http.get(`${this.BASE_URL}`, {params: {url: url}, responseType: 'blob'});
  }
}
