<<<<<<< HEAD
=======
// this class handles teachers

>>>>>>> 031322f3bd6204525b6006ee346add7ca5f9c58a
export class Teacher {
  teacherID: number;
  teacherName: string;
  teacherUsername: string;
  teacherPassword: string;


  constructor(args?) {
    if (args) {
      this.teacherID = args.teacher_id;
      this.teacherName = args.teacher_name;
      this.teacherUsername = args.teacher_username;
      this.teacherPassword = args.teacher_password;
    }
  }
}
