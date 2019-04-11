import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[];

  constructor() { }

  ngOnInit() {
  }

  getAssignments(): void {

  }

}
