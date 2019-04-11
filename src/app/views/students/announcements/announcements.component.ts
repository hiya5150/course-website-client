import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {Announcement} from '../../../models/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[];

  constructor() {

  }

  ngOnInit() {
  }
  getAnnouncements(): void {

  }
}
