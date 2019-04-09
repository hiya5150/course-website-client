export class Student {
  studentID: number;
  studentName: string;
  studentUsername: string;
  studentPassword: string;


  constructor(args?) {
    if (args) {
      this.studentID = args.student_id;
      this.studentName = args.student_name;
      this.studentUsername = args.student_username;
      this.studentPassword = args.student_password;
    }
  }
}
