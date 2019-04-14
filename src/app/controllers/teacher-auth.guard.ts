import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private route: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.verifyTeacher().pipe(switchMap((data) => {
        if (data === true) {
          return of(true);
        } else if (data === false) {
          return this.logout();
        }
      }));
  }
  // deletes token on logout and redirects to home
  private logout(): Observable<boolean> {
    if (AuthService.isLoggedIn()) {
      localStorage.removeItem('token');
    }
    this.route.navigate(['home']);
    return of(false);
  }
}
