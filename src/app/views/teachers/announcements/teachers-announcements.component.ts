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
  // columns to be displayed in table
  displayedColumns: string[] = ['annTitle', 'annBody', 'teacherName', 'annDateCreated', 'annDelete', 'annEdit'];


  constructor(private teacherService: TeachersService, private snackBar: MatSnackBar) { }

  // declares properties that go into announcements table
  annTitle: string;
  annBody: string;
  teacherName: string;
  // allows user to set number of items per "page", and to navigate between pages

  // allows user to set number of items per "page", and to navigate between pages
  // this sets input MatPaginator Input properties
  // length = 100;
  // pageSize = 5;
  // pageSizeOptions: number[] = [5, 10, 25];

  // MatPaginator Output
  // pageEvent: PageEvent;
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
// this will create an announcement redisplay the list and make the create account form disappear, want to make a pop up to say added
  createAnn() {
    if (this.annTitle && this.annBody) {
      if (this.teacherService.createAnnouncement(this.annTitle, this.annBody).subscribe(
        () => this.getAnnouncements()
      )) {
        this.openSnackBar('announcement created', 'close');
        document.getElementById('createForm').style.display = 'none';
      } else {
        this.openSnackBar('announcement could not be created', 'close');
      }
    }
  }
// this will delete an announcement and redisplay the page
  deleteAnn(annID): void {
    this.teacherService.deleteAnnouncement(annID).subscribe(() => this.getAnnouncements());
  }
// this will edit an announcement reload the page and want to make a pop up appear that says edited
  editAnn() {
    if (this.teacherService.editAnnouncement(this.currentAnnID, this.currentAnnTitle, this.currentAnnBody).subscribe(
      () => this.getAnnouncements()
    )) {
      this.openSnackBar('announcement edited', 'close');
      document.getElementById('editForm').style.display = 'none';
    } else {
      this.openSnackBar('announcement could not be edited', 'close');
    }
  }

  // this is used to display the forms
  showAnnForm() {
    document.getElementById('createForm').style.display = 'block';
  }
  showEditForm(annID, annTitle, annBody) {
    this.currentAnnID = annID;
    this.currentAnnTitle = annTitle;
    this.currentAnnBody = annBody;
    document.getElementById('editForm').style.display = 'block';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
