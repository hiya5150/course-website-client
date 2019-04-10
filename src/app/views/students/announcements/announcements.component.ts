import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {WebsiteService} from '../../../models/services/website.service';
import {Announcement} from '../../../models/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[];

  constructor(private websiteService: WebsiteService) {

  }

  ngOnInit() {
  }
  getAnnouncements(): void {
    this.websiteService.getAnnouncements().subscribe(
      (res: Announcement[]) => {
        this.announcements = res;
      }
    );
  }
}
