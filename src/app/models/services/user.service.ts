import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Announcement} from '../announcement';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://course-website-api.herokuapp.com/main/';
  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };
  constructor(private http: HttpClient) { }
  // login and register functions sends username and password and validates it
  // login returns token for session verification
  login(username: string, password: string, type: string): Observable<any> {
    const body = `username=${username}&password=${password}`;
    return this.http.post(`${this.baseUrl}login/${type}Login`, body, this.httpOptions);
  }

  register(name: string, username: string, password: string, type: string): Observable<any> {
    const body = `name=${name}&username=${username}&password=${password}`;
    return this.http.post(`${this.baseUrl}register/${type}Register`, body, this.httpOptions);
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}Home/loadAnnouncements`, this.httpOptions);
  }
}
