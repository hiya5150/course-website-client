import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../models/grade';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  grades: Grade[];
  assignments: any;
  constructor() { }

  ngOnInit() {
  }
  getAnnouncements(): void {

  }
}
