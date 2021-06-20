import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Estate} from '../model/estate';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  private readonly BASE_URL = 'localhost:8080/estate';

  constructor(private http: HttpClient) { }

  findEstateById(): Estate {
    this.http.get<Estate>('/{estateId}/').subscribe(result => {
      return result;
    });
  }
}
