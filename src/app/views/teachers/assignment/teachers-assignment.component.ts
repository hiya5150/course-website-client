import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../models/grade';
import {TeachersService} from '../../../models/services/teachers.service';

@Component({
  selector: 'app-teachers-assignment',
  templateUrl: './teachers-assignment.component.html',
  styleUrls: ['./teachers-assignment.component.scss']
})
export class TeachersAssignmentComponent implements OnInit {
  submissions: Grade[];
  constructor(private teacherService: TeachersService) { }

  ngOnInit() {
    this.viewSubmissions();
  }
  viewSubmissions(): void {
    this.teacherService.viewSubmissions().subscribe(
      (res: Grade[]) => {
        this.submissions = res;
      }
    );
  }

}
