import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
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
  displayedColumns: string[] = ['asnTitle', 'asnBody', 'asnSubject', 'asnDateCreated', 'asnDueDate', 'asnGrade'];

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
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    this.viewAssignments();

  }

  viewAssignments(): void {
    this.teacherService.viewAssignments().subscribe(
      (res) => {
        this.assignments = res;
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









