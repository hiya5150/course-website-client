import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {StudentsService} from '../../../models/services/students.service';

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

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {

  }

  submitAssignment(f) {
   this.studentsService.submit().subscribe((res: Assignment[]) => {
     // update the list of submissions
     this.assignments = res;
   });

  }
}
