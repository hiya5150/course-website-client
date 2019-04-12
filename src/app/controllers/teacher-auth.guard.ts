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
          AuthService.logout();
          return of(false);
        } else {
          this.route.navigateByUrl('home');
          return of(false);
        }
      }));
  }
}
