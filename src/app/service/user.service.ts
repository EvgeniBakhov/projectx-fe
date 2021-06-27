import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = `http://localhost:8080/user`;

  constructor(private http: HttpClient) { }

  getPicture(id: number): Observable<Blob> {
    return this.http.get(`${this.BASE_URL}/${id}/picture`, {responseType: 'blob'});
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/signup`, user);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/${userId}`);
  }

  uploadPicture(imageData: FormData): Observable<any> {
    return this.http.post(`${this.BASE_URL}/picture`, imageData);
  }

  updateUserDetails(userDetails: User): Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}`, userDetails);
  }
}
