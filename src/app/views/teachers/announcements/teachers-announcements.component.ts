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

  constructor(private announcementService: TeachersService) { }

  ngOnInit() {
    this.getAnnouncements();
  }
  getAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe(
      (res) => {
        console.log(res);
        // this.announcements = res;
      }
    );
  }

}
