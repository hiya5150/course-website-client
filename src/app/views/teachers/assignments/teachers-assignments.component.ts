import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
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
  displayedColumns: string[] = ['asnTitle', 'asnSubject', 'asnDateCreated', 'asnDueDate'];

  constructor(private teacherService: TeachersService) { }

  // declares properties that go into assignments table
  asnTitle: string;
  asnDateCreated: any;
  asnDueDate: any;
  asnSubject: string;

  // allows user to set number of items per "page", and to navigate between pages
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAssignments();

  }

  createAsn(): void {

  }

  submitAsn(): void {

  }

  onSubmit() {

    console.log('Your date has been submitted');
  }
  getAssignments(): void {
    this.teacherService.viewAssignments().subscribe(
      (res) => {
        this.assignments = res;
      }
    );
  }


}









