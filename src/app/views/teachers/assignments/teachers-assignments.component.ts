import {Component, OnInit} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {TeachersService} from '../../../models/services/teachers.service';
import { MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-assignments',
  templateUrl: './teachers-assignments.component.html',
  styleUrls: ['./teachers-assignments.component.scss']
})
export class TeachersAssignmentsComponent implements OnInit {
  assignments: Assignment[];
  createForm = { display: 'none' };
  // declares properties that go into assignments table
  asnTitle: string;
  asnBody: string;
  asnDateCreated: any;
  asnDueDate: any;
  asnGrade: number;
  // columns to be displayed in table
  displayedColumns: string[] = ['asnTitle', 'asnBody', 'asnDateCreated', 'asnDueDate', 'asnGrade', 'viewMore'];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private teacherService: TeachersService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.viewAssignments();
  }
// view all the assignments from this teacher
  viewAssignments(): void {
    this.teacherService.viewPrivateAssignments().subscribe(
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
// create a new assignment and make sure every field was filled out before running
  createAsn() {
    if (this.asnTitle && this.asnBody && this.asnDueDate && this.asnGrade) {
      this.teacherService.createAssignment(this.asnTitle, this.asnBody, this.asnDueDate, this.asnGrade)
        .subscribe((res) => {
          if (res[0]) {
            this.assignments = [];
            res.forEach((item) => {
              item = new Assignment(item);
              this.assignments.push(item);
            });
            this.openSnackBar('Assignment created', 'close');
            this.createForm.display = 'none';
            this.asnTitle = '';
            this.asnBody = '';
            this.asnDueDate = '';
            this.asnGrade = null;
          } else {
            console.warn(res);
            this.openSnackBar('Assignment could not be created', 'close');
          }
        }
      );
    } else {
      this.openSnackBar('Please fill in all fields', 'close');
    }
  }
  // show the create assignment form
  showAsnForm() {
    this.createForm.display = 'block';
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}









