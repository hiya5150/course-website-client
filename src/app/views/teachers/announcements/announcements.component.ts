import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../../models/announcement';
import {TeachersService} from '../../../models/services/teachers.service';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[];

  constructor(private announcementService: TeachersService) { }

  ngOnInit() {
    this.getAnnouncements();
  }
  getAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe(
      (res: Announcement[]) => {
        console.log('This Works');
        this.announcements = res;
      }
    );
  }

}
