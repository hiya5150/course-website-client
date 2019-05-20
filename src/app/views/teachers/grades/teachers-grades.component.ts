import { Component, OnInit } from '@angular/core';
import { Grade} from '../../../models/grade';
import {TeachersService} from '../../../models/services/teachers.service';

@Component({
  selector: 'app-grades',
  templateUrl: './teachers-grades.component.html',
  styleUrls: ['./teachers-grades.component.scss']
})
export class TeachersGradesComponent implements OnInit {
submissions: Grade[];
  constructor(private teacherService: TeachersService) { }

  ngOnInit() {
    this.getSubmissions();
  }
  getSubmissions(): void {
    this.teacherService.viewSubmissions(11).subscribe(
      (res) => {
        if (res[0]) {
          this.submissions = [];
          res.forEach((item) => {
            item = new Grade(item);
            this.submissions.push(item);
          });
        } else {
          console.warn(res);
        }
      }
    );
  }

}
