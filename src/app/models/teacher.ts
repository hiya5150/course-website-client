
export class Teacher {
  teacherID: number;
  teacherName: string;


  constructor(args?) {
    if (args) {
      this.teacherID = args.teacher_id;
      this.teacherName = args.teacher_name;

    }
  }
}
