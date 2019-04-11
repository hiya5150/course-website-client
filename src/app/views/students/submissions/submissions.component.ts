import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {
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
