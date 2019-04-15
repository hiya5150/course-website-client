import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {Announcement} from '../../../models/announcement';
import {StudentsService} from '../../../models/services/students.service';

@Component({
  selector: 'app-student-homepage',
  templateUrl: './students-homepage.component.html',
  styleUrls: ['./students-homepage.component.scss']
})
export class StudentsHomepageComponent implements OnInit {
  assignments: Assignment[];
  announcements: Announcement[];
  displayedColumnsAnn: string[] = ['annTitle', 'annBody', 'teacherName', 'annDateCreated'];
  displayedColumnsAsn: string[] = ['asnTitle', 'asnBody', 'asnDateCreated', 'asnDueDate', 'asnGrade'];
  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.getAnnouncements();
    this.getAssignments();
  }
  // this is used to show the total list of assignments
  getAnnouncements(): void {
    this.studentService.getAnnouncements().subscribe(
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
  // this is used to show the total list of announcements
  getAssignments(): void {
    this.studentService.getAssignments().subscribe(
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

