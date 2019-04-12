import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';
import {UserService} from '../../../models/services/user.service';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.scss']
})
export class MainHomepageComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.userService.teacherLogin('malkie', '12345')
      .subscribe((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          console.log(localStorage.getItem('token'));
        }
      });
  }

  openRegister(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(RegisterComponent, dialogConfig);
  }

  openLogin(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(LoginComponent, dialogConfig);
  }
  logout(): void {
  }
}
