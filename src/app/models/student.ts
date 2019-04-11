<<<<<<< HEAD
=======
// this class handles students

>>>>>>> 031322f3bd6204525b6006ee346add7ca5f9c58a
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
