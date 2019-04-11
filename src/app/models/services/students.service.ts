import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl = 'http://localhost/course-website-server/students/';
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization:  '8c56faac2588075c271a51dab727c4027694cd7fce1fdcb3baab3e057a7b5653',
    })
  };

  public getAnnouncements(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'announcements/loadAnnouncements', this.httpOptions);
  }

  public getAssignments(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'assignments/viewAssignments', this.httpOptions);
  }

  public getGrades(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'assignments/viewAssignments', this.httpOptions);
  }
}
