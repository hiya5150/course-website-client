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

      Authorization: '71ca89f3ece135fc47326b84b1fecde62343461bed8c8f4f74997d3f6cf4675b'
    })
  };
  constructor(private http: HttpClient) { }
// Announcement http requests
  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}Announcements/viewAnnouncements`, this.httpOptions).pipe(
      map(result => (result as any[]).map(item => new Announcement(item)))
     );
  }
  deleteAnnouncement(annID: number): Observable<any> {
    const params = new HttpParams().set('annID', annID.toString());

    return this.http.delete(`${this.baseUrl}Announcements/deleteAnnouncement/${annID}`, this.httpOptions);
  }

  viewAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.baseUrl}Assignments/viewAssignments`, this.httpOptions).pipe(
      map(result => (result as any[]).map(item => new Assignment(item)))
    );
  }

  viewSubmissions(asnID: number): Observable<Grade[]> {
    const params = new HttpParams().set('asnID', asnID.toString());
    return this.http.get<Grade[]>(`${this.baseUrl}Grades/viewAllSubmissionsOneAssignment/${asnID}`, this.httpOptions).pipe(
      map(result => (result as any[]).map(item => new Grade(item)))
    );
  }
}
