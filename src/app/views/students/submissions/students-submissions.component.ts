import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-submissions',
  templateUrl: './students-submissions.component.html',
  styleUrls: ['./students-submissions.component.scss']
})
export class StudentsSubmissionsComponent implements OnInit {
 assignments: Assignment[];
  error = '';
  success = '';
  assignment = new Assignment();

  constructor() { }

  ngOnInit() {

  }

  submitAssignment() {
    this.error = '';
    this.success = '';

  }
}
