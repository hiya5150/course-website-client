import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../models/grade';
import {StudentsService} from '../../../models/services/students.service';

@Component({
  selector: 'app-grades',
  templateUrl: './students-grades.component.html',
  styleUrls: ['./students-grades.component.scss']
})
export class StudentsGradesComponent implements OnInit {
  grades: Grade[];
  assignments: any;
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getGrades();
  }
  getGrades(): void {
    this.studentsService.getGrades().subscribe((res) => {
      // console.log(res);
      if (res[0]) {
        this.grades = [];
        res.forEach((item) => {
          item = new Grade(item);
          this.grades.push(item);
        });
      } else {
        console.warn(res);
      }
    });
  }
}
