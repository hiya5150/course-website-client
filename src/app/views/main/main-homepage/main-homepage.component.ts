import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';
import {Announcement} from '../../../models/announcement';
import {UserService} from '../../../models/services/user.service';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.scss']
})
export class MainHomepageComponent implements OnInit {
announcements: Announcement[];
  displayedColumnsAnn: string[] = ['annTitle', 'annBody', 'teacherName', 'annDateCreated'];
  constructor(
    private dialog: MatDialog,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.getAnnouncements();
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

  getAnnouncements(): void {
    this.userService.getAnnouncements().subscribe(
      (res) => {
        if (res[0]) {
          this.announcements = [];
          res.forEach((item) => {
            item = new Announcement(item);
            this.announcements.push(item);
          });
        } else {
          console.warn(res);
        }
      }
    );
  }
}
