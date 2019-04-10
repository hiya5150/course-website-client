import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.scss']
})
export class MainHomepageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openRegister(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(RegisterComponent, dialogConfig);
  }

  openLogin() {
    const dialogConfig = new MatDialogConfig();

   // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';

    this.dialog.open(LoginComponent, dialogConfig);
  }
}
