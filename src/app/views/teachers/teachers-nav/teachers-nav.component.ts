import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../controllers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teachers-nav',
  templateUrl: './teachers-nav.component.html'
})
export class TeachersNavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  // deletes token on logout and redirects to home
  logout(): void {
    if (AuthService.isLoggedIn()) {
      localStorage.removeItem('token');
    }
    this.route.navigate(['home']);
  }
}
