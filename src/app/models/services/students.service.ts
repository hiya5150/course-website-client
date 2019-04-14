import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Announcement} from '../announcement';
import {Assignment} from '../assignment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl = 'http://localhost/course-website-server/students/';
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization:  localStorage.getItem('token')
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };


  public getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.baseUrl + 'announcements/loadAnnouncements', this.httpOptions);
  }


  public getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.baseUrl + 'assignments/viewAssignments', this.httpOptions);
  }

  public getGrades(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'assignments/viewGrades', this.httpOptions);
  }

  public submit(): Observable<any> {
    const body = '';
    return this.http.post(this.baseUrl + 'students/assignments/submitAssignment', body, this.httpOptions);
  }

  viewOneAssignment(asnID: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.baseUrl}Assignments/viewOneAssignment/${asnID}`, this.httpOptions);
  }
}
