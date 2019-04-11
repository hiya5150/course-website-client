import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import {Assignment} from "../../../models/assignment";
import {TeachersService} from "../../../models/services/teachers.service";

@Component({
  selector: 'app-assignments',
  templateUrl: './teachers-assignments.component.html',
  styleUrls: ['./teachers-assignments.component.scss']
})
export class TeachersAssignmentsComponent implements OnInit {
  assignments: Assignment[];
  createAsnForm = new FormGroup( {
    asnSubject : new FormControl(''),
    asnTitle: new FormControl(''),
    asnDateCreated: new FormControl(''),
    asnDueDate: new FormControl(''),

  });

  // dataSource here is temporary, needs to be replaced
  displayedColumns: string[] = ['asnTitle', 'asnSubject', 'asnDateCreated', 'asnDueDate'];
  dataSource = new MatTableDataSource<TempData>(TEMP_DATA);
  constructor(private teacherService: TeachersService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // allows user to set number of items per "page", and to navigate between pages
    this.getAssignments();
    this.dataSource.paginator = this.paginator;
  }

  createAsn(): void {

  }

  onSubmit() {

    console.log('Your date has been submitted');
  }
  getAssignments(): void {
    this.teacherService.viewAssignments().subscribe(
      (res: Assignment[]) => {
        this.assignments = res;
      }
    );
  }


}
export interface TempData {
  // declares properties that go into assignments table
  asnTitle: string;
  asnDateCreated: any;
  asnDueDate: any;
  asnSubject: string;

}
const TEMP_DATA: TempData[] = [
  {asnTitle: 'SQL basic Queries' , asnSubject: 'Database', asnDateCreated: '4/5/2019', asnDueDate: '4/15/2019'},
  {asnTitle: 'DOM' , asnSubject: 'JavaScript', asnDateCreated: '3/27/2019', asnDueDate: '4/17/2019'},
  {asnTitle: 'for loops', asnSubject: 'PHP', asnDateCreated: '4/1/2019', asnDueDate: '4/25/2019'}

];







