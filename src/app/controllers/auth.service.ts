import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost/course-website-server/main/home/';
  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: localStorage.getItem('token')
    })
  };

  static isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  verifyTeacher(): Observable<any> {
    if (AuthService.isLoggedIn()) {
      return this.http.get<any>(`${this.baseUrl}verifyTeacherToken`, this.httpOptions);
    } else {
      return of(false);
    }
  }

  verifyStudent(): Observable<boolean> | boolean {
    if (AuthService.isLoggedIn()) {
      return this.http.get<boolean>(`${this.baseUrl}verifyStudentToken`, this.httpOptions);
    } else {
      return of(false);
    }
  }
}
