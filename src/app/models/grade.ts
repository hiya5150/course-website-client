export class Grade {
  gradeID: number;
  asnID: number;
  studentID: number;
  teacherID: number;
  submission: string;
  submissionDate: string; // change to date
  grade: number;


  constructor(args?) {
    if (args) {
      this.gradeID = args.grade_id;
      this.asnID = args.asn_id;
      this.studentID = args.student_id;
      this.teacherID = args.teacher_id;
      this.submission = args.submission;
      this.submissionDate = args.submission_date;
      this.grade = args.grade;
    }
  }
}
