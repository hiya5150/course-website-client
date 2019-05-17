import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Announcement} from '../announcement';
import {Assignment} from '../assignment';
import {Grade} from '../grade';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl = 'https://course-website-api.herokuapp.com/students/';
  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization:  localStorage.getItem('token')
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  // these function make http call and gets back Observable of type assigned
  // it includes verification token in header
  public getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.baseUrl + 'announcements/loadAnnouncements', this.httpOptions);
  }

  public getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.baseUrl + 'assignments/viewAssignments', this.httpOptions);
  }

  public getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.baseUrl}grades/viewGrades`, this.httpOptions);
  }

  public submit(submission: string, teacherID: number, asnID: number): Observable<any> {
    const body = `submission=${submission}`;
    return this.http.post(`${this.baseUrl}assignments/submitAssignment/${teacherID}/${asnID}`, body, this.httpOptions);
  }

  viewOneAssignment(asnID: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.baseUrl}Assignments/viewOneAssignment/${asnID}`, this.httpOptions);
  }
}
