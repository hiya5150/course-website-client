import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
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


  public getAnnouncements(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'announcements/viewAnnouncements', this.httpOptions).pipe(
      map(result => (result as any[]).map(item => new Announcement(item)))
    );
  }


  public getAssignments(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'assignments/viewAssignments', this.httpOptions);
  }

  public getGrades(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'assignments/viewAssignments', this.httpOptions);
  }

  public submit(): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'assignments/submitAssignments', this.httpOptions);
  }

  viewOneAssignment(asnID: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.baseUrl}Assignments/viewOneAssignment/${asnID}`, this.httpOptions).pipe(
      map(result => (result as any[]))
    );
  }
}
