import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


import {Announcement} from '../announcement';
import {Teacher} from '../teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  baseUrl = 'http://localhost/course-website-server/teachers/';
  announcements: Announcement[];
  private httpOptions = {
    headers: new HttpHeaders({
      //  this is hardcoded for now going to need to replace
      Authorization: localStorage.getItem('token')
    })
  };
  constructor(private http: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.baseUrl}Announcements/viewAnnouncements`, this.httpOptions).pipe(
      map(result => (result as any[]).map(item => new Announcement(item)))
     );
  }
}
