import { Component, OnInit } from '@angular/core';
import {Grade} from '../../../models/grade';
import {TeachersService} from '../../../models/services/teachers.service';
import {Assignment} from '../../../models/assignment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teachers-assignment',
  templateUrl: './teachers-assignment.component.html',
  styleUrls: ['./teachers-assignment.component.scss']
})
export class TeachersAssignmentComponent implements OnInit {
  submissions: Grade[];
  assignment: Assignment;
  asnID;
  currentAsnTitle;

  constructor(private teacherService: TeachersService, private activatedRoute: ActivatedRoute) {
    this.asnID = this.activatedRoute.snapshot.paramMap.get('asnID');
  }


  ngOnInit() {
    this.viewOneAssignment();
    this.viewSubmissions();
  }
  viewOneAssignment(): void {
    this.teacherService.viewOneAssignment(this.asnID).subscribe(
      (res) => {
        this.assignment = new Assignment(res);
      }
    );
  }
  editAsnForm(asnID, asnTitle, asnBody, asnDueDate, asnGrade) {
    this.currentAsnTitle = asnTitle;
    document.getElementById('editForm').style.display = 'block';
  }

  editForm() {
    console.log('hi');
  }
  viewSubmissions(): void {
    this.teacherService.viewSubmissions(this.asnID).subscribe(
      (res) => {
        this.submissions = res;
      }
    );
  }

}
