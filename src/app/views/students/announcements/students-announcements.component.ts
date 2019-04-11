import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {Announcement} from '../../../models/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './students-announcements.component.html',
  styleUrls: ['./students-announcements.component.scss']
})
export class StudentsAnnouncementsComponent implements OnInit {
  announcements: Announcement[];

  constructor() {

  }

  ngOnInit() {
  }
  getAnnouncements(): void {

  }
}
