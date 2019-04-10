import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, config, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Assignment} from '../assignment';
import {Announcement} from '../announcement';
import {Grade} from '../grade';

// import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class WebsiteService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl = 'http://localhost/api';
  assignments: Assignment[];
  announcements: Announcement[];
  grades: Grade[];

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  login(username: string, password: string) {
    return this.http.post<any>(`${config.baseUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  store(assignment: Assignment): Observable<Assignment[]> {
    return this.http.post(`${this.baseUrl}/store`, { data: assignment })
      .pipe(map((res) => {
          this.assignments.push(res['data']);
          return this.assignments;
        }),
        catchError(this.handleError));
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.assignments = res['data'];
        return this.assignments;
      }),
      catchError(this.handleError));
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.announcements = res['data'];
        return this.announcements;
      }),
      catchError(this.handleError));
  }

  getGrades(): Observable<Grade[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.grades = res['data'];
        return this.grades;
      }),
      catchError(this.handleError));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
