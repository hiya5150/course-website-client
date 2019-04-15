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
  asnID: number;
  asnTitle: string;
  asnBody: string;
  asnDueDate: any;
  asnGrade: number;
  editForm = {display : 'none'};
  // declares properties that go into submissions table
  studentID: number;
  studentName: string;
  submission: string;
  submissionDate: any;
  grade: number;
  // columns to be displayed in submissions table
  displayedColumns: string[] = ['studentID', 'studentName', 'submission', 'submissionDate', 'grade', 'addGrade'];
  constructor(
    private teacherService: TeachersService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private route: Router
  ) {
    this.asnID = +this.activatedRoute.snapshot.paramMap.get('asnID');
  }


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
    this.editForm.display = 'block';
  }

  // this will edit the assignment
  editAsn(asnTitle, asnBody, asnDueDate, asnGrade) {
    this.teacherService.editAssignment(this.asnID, asnTitle, asnBody, asnDueDate, asnGrade)
      .subscribe(() => {
        this.viewOneAssignment();
        this.openSnackBar('Assignment edited', 'close');
        this.editForm.display = 'none';
      });
  }
  // if there are no submissions then this will delete the assignment and reroute the user to assignments page
  delete(): void {
    this.teacherService.deleteAssignment(this.asnID).subscribe((res) => {
      if (res.success === true) {
        this.openSnackBar('Assignment deleted', 'close');
        this.route.navigateByUrl('teachers/assignments');
      } else {
        console.warn(res);
      }
    });
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
