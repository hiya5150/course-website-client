import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.sass']
})
export class MainHomepageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(RegisterComponent, dialogConfig);
  }


  ngOnInit() {
  }

}
