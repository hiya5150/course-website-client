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
  asnGrade;
  // columns to be displayed in table
  displayedColumns: string[] = ['studentName', 'submission', 'submissionDate', 'grade', 'addGrade'];

  constructor(private teacherService: TeachersService, private activatedRoute: ActivatedRoute) {
    this.asnID = this.activatedRoute.snapshot.paramMap.get('asnID');
  }
  // declares properties that go into submissions table
  studentName: string;
  submission: string;
  submissionDate: any;
  grade: number;

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
  closeForm() {
    document.getElementById('editForm').style.display = 'none';
  }

  editAsn() {
    if (this.teacherService.editAssignment(this.asnID, this.asnTitle, this.asnBody, this.asnDueDate, this.asnGrade).subscribe(
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
  addGrade() {
    console.log('hi');
  }

}
