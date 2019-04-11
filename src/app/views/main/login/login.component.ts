import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // properties for username, password, and type(whather student or teacher)
  username: string;
  password: string;
  type: string;

  // MatDialogRef refers to dialog box used for login. router is for using router to redirect page
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {

    console.log('You are logged in');
    // need success message. snackbar?
  // redirects user to teacher or student depending on type chosen
    if (this.type === 'teacher') {
      this.router.navigate(['teachers-homepage']);
      console.log('You are a teacher.');
    // } else {
    //   this.router.navigate(['students-homepage']);
    }
  }
}
