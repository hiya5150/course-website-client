import {Component, OnInit, ViewChild} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {StudentsService} from '../../../models/services/students.service';
import {MatDialog, MatDialogRef, MatPaginator} from '@angular/material';
import {Router} from '@angular/router';
import {UserService} from '../../../models/services/user.service';
import {RegisterComponent} from '../../main/register/register.component';

@Component({
  selector: 'app-submissions',
  templateUrl: './students-submissions.component.html',
  styleUrls: ['./students-submissions.component.scss']
})
export class StudentsSubmissionsComponent implements OnInit {
  // Takes in the assignment title
  teacherId: number;
 assignments: Assignment[];

  assignment = new Assignment();

  constructor(private studentsService: StudentsService, public dialogRef: MatDialogRef<RegisterComponent>,
              private dialog: MatDialog,
              private router: Router) { }

  asnTitle: string;


  // Set number of items per page, and navigate between pages
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    this.submitAssignment();

  }
  onSubmit() {
  }
  submitAssignment(): void {
    this.studentsService.submit().subscribe(
      (res) => {
        this.assignments = res;
      }
    );
  }


}
