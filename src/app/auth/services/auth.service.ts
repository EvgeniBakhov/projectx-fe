import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly AUTHORIZATION = 'Authorization';
    private readonly USERNAME = 'username';
    private readonly TOKEN_PREFIX = 'Bearer ';
    private readonly TOKEN = 'token';

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:8080/login', {username, password}, {observe: 'response'}).pipe(
             map (
                 (response: any) => {
                    sessionStorage.setItem(this.USERNAME, username);
                    const token = this.TOKEN_PREFIX + response.headers.get(this.AUTHORIZATION);
                    sessionStorage.setItem(this.TOKEN, token);
                    return response;
                }
            )
        );
    }

    isUserLoggedIn() {
        const user = sessionStorage.getItem(this.USERNAME);
        return !(user === null);
    }

    logOut() {
        this.http.get('http://localhost:8080/logout');
        sessionStorage.removeItem(this.USERNAME);
        sessionStorage.removeItem(this.TOKEN);
    }

    getAuthenticatedUser(): Observable<User> {
        return this.http.get<User>('http://localhost:8080/user/authenticated');
    }
}
