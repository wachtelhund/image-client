import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #API_URL = environment.API_AUTH;

  constructor(private http: HttpClient) { }

  register(registerDetails: { username: string, password: string, email: string, firstName: string, lastName: string }): Observable<any> {
    return this.http.post(`${this.#API_URL}register`, registerDetails);
  }

  login(loginDetails: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.#API_URL}login`, loginDetails).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.access_token);
      })
    )
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
