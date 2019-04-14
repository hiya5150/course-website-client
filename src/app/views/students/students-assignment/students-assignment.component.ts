import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {StudentsService} from '../../../models/services/students.service';

@Component({
  selector: 'app-students-assignment',
  templateUrl: './students-assignment.component.html',
  styleUrls: ['./students-assignment.component.scss']
})
export class StudentsAssignmentComponent implements OnInit {
  assignment: Assignment[];
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.viewOneAssignment(11);

  }
  viewOneAssignment(asnID): void {
    this.studentsService.viewOneAssignment(11).subscribe(
      (res) => {
        this.assignment = res;
      }
    );
  }


}
