import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost/course-website-server/main/';
  constructor(private http: HttpClient) { }

  public teacherLogin(): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'login/teacherLogin', this.baseUrl);
  }

  public studentLogin(): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'login/teacherLogin', this.baseUrl);
  }

  public teacherRegister(): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'login/teacherLogin', this.baseUrl);
  }

  public studentRegister(): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'login/teacherLogin', this.baseUrl);
  }
}
