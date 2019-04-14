import {Component, OnInit} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {TeachersService} from '../../../models/services/teachers.service';


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
  constructor(private teacherService: TeachersService) {
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

  viewAssignments(): void {
    this.teacherService.viewAssignments().subscribe(
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

  createAsn() {
    if (this.asnTitle && this.asnBody && this.asnDueDate && this.asnGrade){
      if (this.teacherService.createAssignment(this.asnTitle, this.asnBody, this.asnDueDate, this.asnGrade).subscribe(
        () => this.viewAssignments()
      )) {
        document.getElementById('createForm').style.display = 'none';
      }
    }
  }
  showAsnForm() {
    document.getElementById('createForm').style.display = 'block';
  }

}









