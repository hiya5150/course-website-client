import {Component, OnInit, ViewChild} from '@angular/core';
import {Announcement} from '../../../models/announcement';
import {TeachersService} from '../../../models/services/teachers.service';
import {MatPaginator} from '@angular/material';


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
  displayedColumns: string[] = ['annTitle', 'annBody', 'annDelete', 'annEdit'];


  constructor(private teacherService: TeachersService) { }

  // declares properties that go into announcements table
     annTitle: string;
     annBody: string;
  // allows user to set number of items per "page", and to navigate between pages

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.getAnnouncements();
  }
  // this is used to show the total list of assignments
  getAnnouncements(): void {
    this.teacherService.getAnnouncements().subscribe(
      (res) => {
        this.announcements = res;
      }
    );
  }
// this will create an announcement redisplay the list and make the create account form disappear, want to make a pop up to say added
  createAnn() {
    if (this.annTitle && this.annBody) {
      this.teacherService.createAnnouncement(this.annTitle, this.annBody).subscribe(
        () => this.getAnnouncements()
      );
      document.getElementById('createForm').style.display = 'none';
    }
  }
// this will delete an announcement and redisplay the page
  deleteAnn(annID): void {
    this.teacherService.deleteAnnouncement(annID).subscribe(() => this.getAnnouncements());
  }
// this will edit an announcement reload the page and want to make a pop up appear that says edited
  editAnn() {
    this.teacherService.editAnnouncement(this.currentAnnID, this.currentAnnTitle, this.currentAnnBody).subscribe(
      () => this.getAnnouncements()
    );
    document.getElementById('editForm').style.display = 'none';
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
}
