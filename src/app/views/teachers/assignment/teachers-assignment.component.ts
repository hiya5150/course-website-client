import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../models/grade';
import {TeachersService} from '../../../models/services/teachers.service';
import {Assignment} from '../../../models/assignment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teachers-assignment',
  templateUrl: './teachers-assignment.component.html',
  styleUrls: ['./teachers-assignment.component.scss']
})
export class TeachersAssignmentComponent implements OnInit {
  submissions: Grade[];
  assignment: Assignment;
  asnID;
  asnTitle;
  asnBody;
  asnDueDate;

  constructor(private teacherService: TeachersService, private activatedRoute: ActivatedRoute) {
    this.asnID = this.activatedRoute.snapshot.paramMap.get('asnID');
  }


  ngOnInit() {
    this.viewOneAssignment();
    this.viewSubmissions();
  }
  viewOneAssignment(): void {
    this.teacherService.viewOneAssignment(this.asnID).subscribe(
      (res) => {
        this.assignment = new Assignment(res);
      }
    );
  }
  editAsnForm() {
    document.getElementById('editForm').style.display = 'block';
  }

  editAsn() {
    if (this.teacherService.editAssignment(this.asnID, this.asnTitle, this.asnBody, this.asnDueDate, this.assignment.asnGrade).subscribe(
      () => this.viewOneAssignment()
    )) {
      document.getElementById('editForm').style.display = 'none';
    }
  }
  viewSubmissions(): void {
    this.teacherService.viewSubmissions(this.asnID).subscribe(
      (res) => {
        this.submissions = res;
      }
    );
  }

}
