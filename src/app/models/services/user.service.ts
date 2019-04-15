import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Announcement} from '../announcement';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost/course-website-server/main/';
  private httpOptions = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };
  constructor(private http: HttpClient) { }
  // login and register functions sends username and password and validates it
  // login returns token for session verification
  teacherLogin(username: string, password: string): Observable<any> {
    const body = `username=${username}&password=${password}`;
    return this.http.post(this.baseUrl + 'login/teacherLogin', body, this.httpOptions);
  }

  studentLogin(username: string, password: string): Observable<any> {
    const body = `username=${username}&password=${password}`;
    return this.http.post(this.baseUrl + 'login/studentLogin', body, this.httpOptions);
  }

  teacherRegister(name: string, username: string, password: string): Observable<any> {
    const body = `name=${name}&username=${username}&password=${password}`;
    return this.http.post(this.baseUrl + 'register/teacherRegister', body, this.httpOptions);
  }

  studentRegister(name: string, username: string, password: string): Observable<any> {
    const body = `name=${name}&username=${username}&password=${password}`;
    return this.http.post(this.baseUrl + 'register/studentRegister', body, this.httpOptions);
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}Home/loadAnnouncements`, this.httpOptions);
  }
}
