import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static route: Router;
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost/course-website-server/main/home/';
  private httpOptions = {
    headers: new HttpHeaders({
      // sending auth token in header
      Authorization: localStorage.getItem('token')
    })
  };
  // checks if there's a token available
  static isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  // deletes token on logout and redirects to home
  static logout(): void {
    localStorage.removeItem('token');
    this.route.navigateByUrl('home');
  }
  // checks if token available and return true if token valid as teacher
  verifyTeacher(): Observable<any> {
    if (AuthService.isLoggedIn()) {
      return this.http.get<any>(`${this.baseUrl}verifyTeacherToken`, this.httpOptions);
    } else {
      return of(false);
    }
  }
  // checks if token available and return true if token valid as student
  verifyStudent(): Observable<any> {
    if (AuthService.isLoggedIn()) {
      return this.http.get<any>(`${this.baseUrl}verifyStudentToken`, this.httpOptions);
    } else {
      return of(false);
    }
  }
}
