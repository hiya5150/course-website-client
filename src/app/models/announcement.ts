export class Announcement {
  annID: number;
  annTitle: string;
  annBody: string;
  annDateCreated: string; // have to change this to type date and create a date ts
  teacherID: number;


  constructor(args?) {
    if (args) {
      this.annID = args.ann_id;
      this.annTitle = args.ann_title;
      this.annBody = args.ann_body;
      this.annDateCreated = args.ann_date_created;
      this.teacherID = args.teacher_id;
    }
  }
}
