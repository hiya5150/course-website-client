import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {UserService} from '../../../models/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // properties for username, password, and type(whether student or teacher)
  username: string;
  password: string;
  type: string;

  // MatDialogRef refers to dialog box used for login. router is for using router to redirect page
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    private userService: UserService,
    ) {}

  ngOnInit() {
  }
  onSubmit() {
    switch (this.type) {
      case 'teacher':
        this.userService.teacherLogin(this.username, this.password).subscribe((res) => {
          if (res.token) {
            window.localStorage.setItem('token', res.token);
            this.dialogRef.close();
            this.router.navigateByUrl('teachers/homepage');
          }
        });
        break;
      case 'student':
        this.userService.studentLogin(this.username, this.password).subscribe((res) => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            this.dialogRef.close();
            this.router.navigateByUrl('teachers/homepage');
          }
        });
        break;
    }
  }
}
