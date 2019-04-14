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
  displayedColumns: string[] = ['annTitle', 'annBody', 'teacherName', 'annDateCreated'];
  displayedColumns2: string[] = ['asnTitle', 'asnBody', 'asnSubject', 'asnDateCreated', 'asnDueDate', 'asnGrade'];

  constructor(private teacherService: TeachersService) { }

  ngOnInit() {
    this.getAnnouncements();
    this.getAssignments();
  }
getAnnouncements(): void {
    this.teacherService.getAnnouncements().subscribe(
      (res) => {
        this.announcements = res;
      }
    );
}
getAssignments(): void {
    this.teacherService.viewAssignments().subscribe(
      (res) => {
        this.assignments = res;
      }
    );
}
}
