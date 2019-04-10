import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  // dataSource here is temporary, needs to be replaced
  displayedColumns: string[] = ['asnTitle', 'asnDateCreated', 'asnDueDate'];
  dataSource = new MatTableDataSource<TempData>(TEMP_DATA);
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // allows user to set number of items per "page", and to navigate between pages
    this.dataSource.paginator = this.paginator;
  }

  createAsn(): void {

  }

  onSubmit() {

    console.log('Your date has been submitted');
  }

}
export interface TempData {
  // declares properties that go into assignments table
  asnTitle: string;
  asnDateCreated: any;
  asnDueDate: any;

}
const TEMP_DATA: TempData[] = [
  {asnTitle: 'Database', asnDateCreated: '4/5/2019', asnDueDate: '4/15/2019'},
  {asnTitle: 'JavaScript', asnDateCreated: '3/27/2019', asnDueDate: '4/17/2019'},
  {asnTitle: 'PHP', asnDateCreated: '4/1/2019', asnDueDate: '4/25/2019'}

];







