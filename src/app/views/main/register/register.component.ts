import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {UserService} from '../../../models/services/user.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // properties for name, username, password, and type(whether student or teacher)
  name: string;
  username: string;
  password: string;
  type: string;

  // MatDialogRef refers to dialog box used for login. router is for using router to redirect page
  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    switch (this.type) {
      case 'teacher':
        this.userService.teacherRegister(this.name, this.username, this.password)
          .subscribe((res) => {
            if (res.success === true) {
              this.dialogRef.close();
              this.openLogin();
            }
          });
        break;
      case 'students':
        this.userService.studentRegister(this.name, this.username, this.password)
          .subscribe((res) => {
            if (res.success === true) {
              this.dialogRef.close();
              this.openLogin();
            }
          });
        break;
    }
  }
  openLogin(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(LoginComponent, dialogConfig);
  }
}
