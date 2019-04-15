// this class handles submissions and the grades associated with them

export class Grade {
  gradeID: number;
  asnID: number;
  asnTitle: string;
  studentID: number;
  studentName: string;
  teacherID: number;
  teacherName: string;
  submission: string;
  submissionDate: string; // change to date
  grade: number;


  constructor(args?) {
    if (args) {
      this.gradeID = args.grade_id;
      this.asnID = args.asn_id;
      this.asnTitle = args.asn_title;
      this.studentID = args.student_id;
      this.studentName = args.student_name;
      this.teacherID = args.teacher_id;
      this.teacherName = args.teacher_name;
      this.submission = args.submission;
      this.submissionDate = args.submission_date;
      this.grade = args.grade;
    }
  }
}
