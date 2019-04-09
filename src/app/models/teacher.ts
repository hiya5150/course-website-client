
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
