import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../models/grade';
import {TeachersService} from '../../../models/services/teachers.service';
import {Assignment} from '../../../models/assignment';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

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


  // columns to be displayed in submissions table
  displayedColumns: string[] = ['studentID', 'studentName', 'submission', 'submissionDate', 'grade', 'addGrade'];
  // columns to be displayed in assignment table
  displayedColumns2: string[] = ['asnTitle', 'asnBody', 'asnDateCreated', 'asnDueDate', 'asnGrade', 'edit'];

  constructor(
    private teacherService: TeachersService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.asnID = this.activatedRoute.snapshot.paramMap.get('asnID');
  }
  // declares properties that go into submissions table
  studentID: number;
  studentName: string;
  submission: string;
  submissionDate: any;
  grade: number;

  ngOnInit() {
    this.viewOneAssignment();
    this.viewSubmissions();
  }
  // view the assignment that was clicked on in assignments component
  viewOneAssignment(): void {
    this.teacherService.viewOneAssignment(this.asnID).subscribe(
      (res) => {
        this.assignment = new Assignment(res);
      }
    );
  }
  // if edit was clicked then edit form appears
  editAsnForm() {
    document.getElementById('editForm').style.display = 'block';
  }

  // this will edit the assignment
  editAsn(asnTitle, asnBody, asnDueDate, asnGrade) {
    if (this.teacherService.editAssignment(this.asnID, asnTitle, asnBody, asnDueDate, asnGrade).subscribe(
      () => this.viewOneAssignment()
    )) {
      this.openSnackBar('Assignment edited', 'close');
      document.getElementById('editForm').style.display = 'none';
    } else {
      this.openSnackBar('Assignment could not be edited', 'close');
    }
  }
  // if there are no submissions then this will delete the assignment and reroute the user to assignments page
  delete(): void {
    this.teacherService.deleteAssignment(this.asnID).subscribe(
      (res) => {
        if (res.success === true) {
          this.openSnackBar('Assignment deleted', 'close');
          setTimeout(() => {
            this.route.navigateByUrl('teachers/assignments');
          }, 2000);
        } else {
          this.openSnackBar('Assignment could not be deleted', 'close');
        }
      }
    );

  }
  // view all submissions from students for this assignment
  viewSubmissions(): void {
    this.teacherService.viewSubmissions(this.asnID).subscribe(
      (res) => {
        if (res[0]) {
          this.submissions = [];
          res.forEach((item) => {
            item = new Grade(item);
            this.submissions.push(item);
          });
        } else {
          console.warn(res);
        }
      }
    );
  }
  // give each student their grade
  editGrade(studentID: number, grade: number): void {
    this.teacherService.editGrade(studentID, this.asnID, grade).subscribe(
      (res) => {
        if (res.success === true) {
          this.openSnackBar('grade edited', 'close');
          this.viewSubmissions();
        } else {
          this.openSnackBar('grade could not be edited', 'close');
          console.warn(res);
        }
      });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
