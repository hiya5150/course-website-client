import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


import {Announcement} from '../announcement';
import {Assignment} from '../assignment';
import {Grade} from '../grade';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  baseUrl = 'http://localhost/course-website-server/teachers/';
  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: localStorage.getItem('token')
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };
  constructor(private http: HttpClient) { }
// Announcement http requests
  getPrivateAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}Announcements/viewPrivateAnnouncements`, this.httpOptions).pipe(
      map(result => (result as any[]).map(item => new Announcement(item)))
     );
  }

  createAnnouncement(annTitle: string, annBody: string): Observable<any> {
    const body = `annTitle=${annTitle}&annBody=${annBody}`;
    return this.http.post(`${this.baseUrl}Announcements/createAnnouncement`, body, this.httpOptions);
  }

  deleteAnnouncement(annID: number): Observable<any> {
    const params = new HttpParams().set('annID', annID.toString());

    return this.http.delete(`${this.baseUrl}Announcements/deleteAnnouncement/${annID}`, this.httpOptions);
  }

  editAnnouncement(annID: number, annTitle: string, annBody: string): Observable<any> {
    const body = `annTitle=${annTitle}&annBody=${annBody}`;
    return this.http.post(`${this.baseUrl}Announcements/editAnnouncement/${annID}`, body, this.httpOptions);
  }

  viewPrivateAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.baseUrl}Assignments/viewAssignments`, this.httpOptions).pipe(
      map(result => (result as any[]).map(item => new Assignment(item)))
    );
  }

  viewOneAssignment(asnID: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.baseUrl}Assignments/viewOneAssignment/${asnID}`, this.httpOptions);
  }

  createAssignment(asnTitle: string, asnBody: string, asnDueDate: any, asnGrade: number): Observable<any> {
    const body = `asnTitle=${asnTitle}&asnBody=${asnBody}&asnDueDate=${asnDueDate}&asnGrade=${asnGrade}`;
    return this.http.post(`${this.baseUrl}Assignments/createAssignment`, body, this.httpOptions);
  }

  deleteAssignment(asnID: number): Observable<any> {
    const params = new HttpParams().set('asnID', asnID.toString());
    return this.http.delete(`${this.baseUrl}Assignments/deleteAssignment/${asnID}`, this.httpOptions);
  }

  editAssignment(asnID: number, asnTitle: string, asnBody: string, asnDueDate: any, asnGrade: number): Observable<any> {
    const body = `asnTitle=${asnTitle}&asnBody=${asnBody}&asnDueDate=${asnDueDate}&asnGrade=${asnGrade}`;
    return this.http.post(`${this.baseUrl}Assignments/editAssignment/${asnID}`, body, this.httpOptions);
  }

  viewSubmissions(asnID: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.baseUrl}Grades/viewAllSubmissionsOneAssignment/${asnID}`, this.httpOptions).pipe(
      map(result => (result as any[]).map(item => new Grade(item)))
    );
  }
  editGrade(studentID: number, asnID: number, grade: number): Observable<any> {
    const body = `grade=${grade}`;
    console.log(grade);
    return this.http.post(`${this.baseUrl}Grades/editGrade/${studentID}/${asnID}`, body, this.httpOptions);
  }
}
