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

  // columns to be displayed in table
  displayedColumns: string[] = ['annTitle', 'annBody'];


  constructor(private teacherService: TeachersService) { }

  // declares properties that go into announcements table
     annTitle: string;
     annBody: string;
  // allows user to set number of items per "page", and to navigate between pages

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.getAnnouncements();
  }
  getAnnouncements(): void {
    this.teacherService.getAnnouncements().subscribe(
      (res) => {
        this.announcements = res;
      }
    );
  }
  deleteAnn(annID): void {
    this.getAnnouncements();
    this.teacherService.deleteAnnouncement(annID).subscribe();
  }

  createAnn() {

  }

}
