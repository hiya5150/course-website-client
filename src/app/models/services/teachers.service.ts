import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Announcement} from '../announcement';
import {Assignment} from '../assignment';
import {Grade} from '../grade';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  baseUrl = 'https://course-website-api.herokuapp.com/teachers/';
  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };
  constructor(private http: HttpClient) { }
  // these function make http call and gets back Observable of type assigned
  // it includes verification token in header
  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}Announcements/viewAnnouncements`, this.httpOptions);
  }

  getPrivateAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}Announcements/viewPrivateAnnouncements`, this.httpOptions);
  }

  createAnnouncement(annTitle: string, annBody: string): Observable<Announcement[]> {
    const body = `annTitle=${annTitle}&annBody=${annBody}`;
    return this.http.post<Announcement[]>(`${this.baseUrl}Announcements/createAnnouncement`, body, this.httpOptions);
  }

  deleteAnnouncement(annID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}Announcements/deleteAnnouncement/${annID}`, this.httpOptions);
  }

  editAnnouncement(annID: number, annTitle: string, annBody: string): Observable<Announcement[]> {
    const body = `annTitle=${annTitle}&annBody=${annBody}`;
    return this.http.post<Announcement[]>(`${this.baseUrl}Announcements/editAnnouncement/${annID}`, body, this.httpOptions);
  }

  viewAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.baseUrl}Assignments/viewAssignments`, this.httpOptions);
  }

  viewPrivateAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.baseUrl}Assignments/viewPrivateAssignments`, this.httpOptions);
  }

  viewOneAssignment(asnID: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.baseUrl}Assignments/viewOneAssignment/${asnID}`, this.httpOptions);
  }

  createAssignment(asnTitle: string, asnBody: string, asnDueDate: any, asnGrade: number): Observable<Assignment[]> {
    const body = `asnTitle=${asnTitle}&asnBody=${asnBody}&asnDueDate=${asnDueDate}&asnGrade=${asnGrade}`;
    return this.http.post<Assignment[]>(`${this.baseUrl}Assignments/createAssignment`, body, this.httpOptions);
  }

  deleteAssignment(asnID: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}Assignments/deleteAssignment/${asnID}`, this.httpOptions);
  }

  editAssignment(asnID: number, asnTitle: string, asnBody: string, asnDueDate: any, asnGrade: number): Observable<any> {
    const body = `asnTitle=${asnTitle}&asnBody=${asnBody}&asnDueDate=${asnDueDate}&asnGrade=${asnGrade}`;
    return this.http.post(`${this.baseUrl}Assignments/editAssignment/${asnID}`, body, this.httpOptions);
  }

  viewSubmissions(asnID: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${this.baseUrl}Grades/viewAllSubmissionsOneAssignment/${asnID}`, this.httpOptions);
  }

  editGrade(studentID: number, asnID: number, grade: number): Observable<any> {
    const body = `grade=${grade}`;
    return this.http.post(`${this.baseUrl}Grades/editGrade/${studentID}/${asnID}`, body, this.httpOptions);
  }
}
