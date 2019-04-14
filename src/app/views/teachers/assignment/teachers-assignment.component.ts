import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../models/grade';
import {TeachersService} from '../../../models/services/teachers.service';
import {Assignment} from '../../../models/assignment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teachers-assignment',
  templateUrl: './teachers-assignment.component.html',
  styleUrls: ['./teachers-assignment.component.scss']
})
export class TeachersAssignmentComponent implements OnInit {
  submissions: Grade[];
  assignment: Assignment[];
  constructor(private teacherService: TeachersService, private router: Router) { }

  ngOnInit() {
    this.viewOneAssignment(11);
    this.viewSubmissions();
    console.log(this.router.url);
  }
  viewOneAssignment(asnID): void {
    this.teacherService.viewOneAssignment(11).subscribe(
      (res) => {
        this.assignment = res;
      }
    );
  }
  viewSubmissions(): void {
    this.teacherService.viewSubmissions(11).subscribe(
      (res) => {
        this.submissions = res;
      }
    );
  }

}
