import {Component, OnInit, ViewChild} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {StudentsService} from '../../../models/services/students.service';
import {MatPaginator} from '@angular/material';

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

  asnTitle: string;


  // Set number of items per page, and navigate between pages
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.submitAssignment();

  }



  onSubmit() {


  }
  submitAssignment(): void {
    this.studentsService.submit().subscribe(
      (res) => {
        this.assignments = res;
      }
    );
  }


}
