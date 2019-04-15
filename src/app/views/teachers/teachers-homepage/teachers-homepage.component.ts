import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../../../models/services/teachers.service';
import {Announcement} from '../../../models/announcement';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-teachers-homepage',
  templateUrl: './teachers-homepage.component.html',
  styleUrls: ['./teachers-homepage.component.scss']
})
export class TeachersHomepageComponent implements OnInit {
  announcements: Announcement[];
  assignments: Assignment[];
  displayedColumnsAnn: string[] = ['annTitle', 'annBody', 'teacherName', 'annDateCreated'];
  displayedColumnsAsn: string[] = ['asnTitle', 'asnBody', 'asnDateCreated', 'asnDueDate', 'asnGrade'];

  constructor(private teacherService: TeachersService) { }

  ngOnInit() {
    this.getAnnouncements();
    this.getAssignments();
  }
  // display all the announcements from all teachers
  getAnnouncements(): void {
      this.teacherService.getAnnouncements().subscribe(
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
  // display all the assignments from all teachers
  getAssignments(): void {
      this.teacherService.viewAssignments().subscribe(
        (res) => {
          if (res[0]) {
            this.assignments = [];
            res.forEach((item) => {
              item = new Assignment(item);
              this.assignments.push(item);
            });
          } else {
            console.warn(res);
          }
        }
      );
  }
}
