import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {StudentsService} from '../../../models/services/students.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './students-assignments.component.html',
  styleUrls: ['./students-assignments.component.scss']
})
export class StudentsAssignmentsComponent implements OnInit {
  assignments: Assignment[];
  displayedColumns: string[] = ['annTitle', 'annBody', 'teacherName', 'annDateCreated'];
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments(): void {
    this.studentsService.getAssignments().subscribe((res) => console.log(res) );
  }

}
