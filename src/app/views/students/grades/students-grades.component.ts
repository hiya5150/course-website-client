import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../models/grade';

@Component({
  selector: 'app-grades',
  templateUrl: './students-grades.component.html',
  styleUrls: ['./students-grades.component.scss']
})
export class StudentsGradesComponent implements OnInit {
  grades: Grade[];
  assignments: any;
  constructor() { }

  ngOnInit() {
  }
  getAnnouncements(): void {

  }
}
