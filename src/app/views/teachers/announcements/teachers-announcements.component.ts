import {Component, OnInit} from '@angular/core';
import {Announcement} from '../../../models/announcement';
import {TeachersService} from '../../../models/services/teachers.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-announcements',
  templateUrl: './teachers-announcements.component.html',
  styleUrls: ['./teachers-announcements.component.scss']
})
export class TeachersAnnouncementsComponent implements OnInit {
  announcements: Announcement[];
  currentAnnID: number;
  currentAnnTitle: string;
  currentAnnBody: string;
  createForm = { display: 'none' };
  editForm = { display: 'none' };
  // declares properties that go into announcements table
  annTitle: string;
  annBody: string;
  teacherName: string;
  // columns to be displayed in table
  displayedColumns: string[] = ['annTitle', 'annBody', 'teacherName', 'annDateCreated', 'annDelete', 'annEdit'];


  constructor(private teacherService: TeachersService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAnnouncements();
  }
  // this is used to show the total list of assignments
  getAnnouncements(): void {
    this.teacherService.getPrivateAnnouncements().subscribe(
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
// this will create an announcement redisplay the list and make the create account form disappear, with pop up
  createAnn() {
    if (this.annTitle && this.annBody) {
      this.teacherService.createAnnouncement(this.annTitle, this.annBody)
        .subscribe((res) => {
          if (res[0]) {
            this.announcements = [];
            res.forEach((item) => {
              item = new Announcement(item);
              this.announcements.push(item);
            });
            this.openSnackBar('announcement created', 'close');
            this.createForm.display = 'none';
            this.annTitle = '';
            this.annBody = '';
          } else {
            this.openSnackBar('announcement could not be created', 'close');
            console.warn(res);
          }
        });
    }
  }
// this will delete an announcement and redisplay the page
  deleteAnn(annID): void {
    this.teacherService.deleteAnnouncement(annID).subscribe(() => this.getAnnouncements());
  }
// this will edit an announcement reload the page and want to make a pop up appear that says edited
  editAnn() {
    this.teacherService.editAnnouncement(this.currentAnnID, this.currentAnnTitle, this.currentAnnBody)
      .subscribe((res) => {
        if (res[0]) {
          this.announcements = [];
          res.forEach((item) => {
            item = new Announcement(item);
            this.announcements.push(item);
          });
          this.openSnackBar('announcement edited', 'close');
          this.editForm.display = 'none';
        } else {
          this.openSnackBar('announcement could not be edited', 'close');
          console.warn(res);
        }
      }
    );
  }

  // this is used to display the forms
  showAnnForm() {
    this.createForm.display = 'block';
  }
  showEditForm(annID, annTitle, annBody) {
    this.currentAnnID = annID;
    this.currentAnnTitle = annTitle;
    this.currentAnnBody = annBody;
    this.editForm.display = 'block';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
