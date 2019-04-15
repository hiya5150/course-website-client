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

  // columns to be displayed in table
  displayedColumns: string[] = ['asnTitle', 'asnBody', 'asnSubject', 'asnDateCreated', 'asnDueDate', 'asnGrade', 'viewMore'];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private teacherService: TeachersService, private snackBar: MatSnackBar) {
  }

  // declares properties that go into assignments table
  asnTitle: string;
  asnBody: string;
  asnDateCreated: any;
  asnDueDate: any;
  asnSubject: string;
  asnGrade: number;

  // allows user to set number of items per "page", and to navigate between pages
  // this sets input MatPaginator Input properties
  // length: number;
  // pageSize = 1;
  // pageSizeOptions: number[] = [1, 5, 10, 25];

  // MatPaginator Output
  // pageEvent: PageEvent;
  // dataSource: MatTableDataSource<any>;
  ngOnInit() {
    this.viewAssignments();
    // this.dataSource.paginator = this.paginator;
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
        // this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
        // this.length = this.assignments.length;
      }
    );
  }
// create a new assignment and make sure every field was filled out before running
  createAsn() {
    if (this.asnTitle && this.asnBody && this.asnDueDate && this.asnGrade) {
      if (this.teacherService.createAssignment(this.asnTitle, this.asnBody, this.asnDueDate, this.asnGrade).subscribe(
        () => this.viewAssignments()
      )) {
        this.openSnackBar('Assignment created', 'close');
        document.getElementById('createForm').style.display = 'none';
      } else {
        this.openSnackBar('Assignment could not be created', 'close');
      }
    } else {
      this.openSnackBar('Please fill in all fields', 'close');
    }
  }
  // show the create assignment form
  showAsnForm() {
    document.getElementById('createForm').style.display = 'block';
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}









