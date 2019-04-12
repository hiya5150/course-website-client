import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../../models/announcement';
import {TeachersService} from '../../../models/services/teachers.service';


@Component({
  selector: 'app-announcements',
  templateUrl: './teachers-announcements.component.html',
  styleUrls: ['./teachers-announcements.component.scss']
})
export class TeachersAnnouncementsComponent implements OnInit {
  announcements: Announcement[];

  constructor(private teacherService: TeachersService) { }

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
