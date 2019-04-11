// this class handles assignments issued by teachers, and viewable by students

export class Assignment {
  asnID: number;
  asnTitle: string;
  asnBody: string;
  asnDateCreated: string; // have to change this to type date and create a date ts
  asnDueDate: string;
  asnGrade: number;
  teacherID: number;
  asnSubject: string;


  constructor(args?) {
    if (args) {
      this.asnID = args.asn_id;
      this.asnTitle = args.asn_title;
      this.asnBody = args.asn_body;
      this.asnDateCreated = args.asn_date_created;
      this.asnDueDate = args.asn_due_date;
      this.asnGrade = args.asn_grade;
      this.teacherID = args.teacher_id;
      this.asnSubject = args.asnSubject;
    }
  }
}
