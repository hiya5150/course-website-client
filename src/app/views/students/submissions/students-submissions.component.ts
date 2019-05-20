import {Component, Inject, OnInit} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {StudentsService} from '../../../models/services/students.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-submissions',
  templateUrl: './students-submissions.component.html',
  styleUrls: ['./students-submissions.component.scss']
})
export class StudentsSubmissionsComponent implements OnInit {
  // Takes in the assignment title
  assignment: Assignment;
  body: string;

  constructor(
    private studentsService: StudentsService,
    public dialogRef: MatDialogRef<StudentsSubmissionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this.viewAssignment();
  }

  submitAssignment(): void {
    this.studentsService.submit(this.body, this.assignment.teacherID, this.assignment.asnID)
      .subscribe((res) => {
        if (res.success === true) {
          this.dialogRef.close();
        } else {
          console.warn(res);
        }
      }
    );
  }

  viewAssignment(): void {
    this.studentsService.viewOneAssignment(this.data.asnId).subscribe((res) => {
      // console.log(res);
      this.assignment = new Assignment(res);
    });
  }
}
