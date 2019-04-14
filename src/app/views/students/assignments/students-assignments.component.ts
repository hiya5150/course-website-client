import {Component, OnInit, ViewChild} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {StudentsService} from '../../../models/services/students.service';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-assignments',
  templateUrl: './students-assignments.component.html',
  styleUrls: ['./students-assignments.component.scss']
})
export class StudentsAssignmentsComponent implements OnInit {
  assignments: Assignment[];
  displayedColumns: string[] = ['asnSubject', 'asnTitle', 'asnBody', 'teacherName', 'asnDateCreated', 'asnDueDate', 'asnGrade'];
  constructor(private studentsService: StudentsService) { }
  asnTitle: string;
  asnBody: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getAssignments();
  }

  getAssignments(): void {
    this.studentsService.getAssignments().subscribe((res) => {
      this.assignments = [];
      console.log(res);
      res.forEach((item) => {
        item = new Assignment(item);
        this.assignments.push(item);
      });
      console.log(this.assignments);
    });
  }

}
