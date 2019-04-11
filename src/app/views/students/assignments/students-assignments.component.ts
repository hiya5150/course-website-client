import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-assignments',
  templateUrl: './students-assignments.component.html',
  styleUrls: ['./students-assignments.component.scss']
})
export class StudentsAssignmentsComponent implements OnInit {
  assignments: Assignment[];

  constructor() { }

  ngOnInit() {
  }

  getAssignments(): void {

  }

}
