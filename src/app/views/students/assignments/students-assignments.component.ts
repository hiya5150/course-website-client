import {Component, OnInit, ViewChild} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {StudentsService} from '../../../models/services/students.service';
import {MatDialog, MatDialogConfig, MatPaginator} from '@angular/material';
import {StudentsSubmissionsComponent} from '../submissions/students-submissions.component';

@Component({
  selector: 'app-assignments',
  templateUrl: './students-assignments.component.html',
  styleUrls: ['./students-assignments.component.scss']
})
export class StudentsAssignmentsComponent implements OnInit {
  assignments: Assignment[];
  displayedColumns: string[] = ['asnSubject', 'asnTitle', 'asnBody', 'teacherName', 'asnDateCreated', 'asnDueDate', 'asnGrade', 'submit'];
  constructor(
    private studentsService: StudentsService,
    private dialog: MatDialog
    ) { }
  asnTitle: string;
  asnBody: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getAssignments();
  }

  getAssignments(): void {
    this.studentsService.getAssignments().subscribe((res) => {
      this.assignments = [];

      res.forEach((item) => {
        item = new Assignment(item);
        this.assignments.push(item);
      });
      console.log(this.assignments);
    });
  }
  openSubmission(id: number): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = { asnId: id };

    this.dialog.open(StudentsSubmissionsComponent, dialogConfig);
  }
}
