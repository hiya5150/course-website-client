// this class handles announcements issued by teachers, and viewable by students

export class Announcement {
  annID: number;
  annTitle: string;
  annBody: string;
  annDateCreated: any; // have to change this to type date and create a date ts
  teacherName: string;


  constructor(args?) {
    if (args) {
      this.annID = args.ann_id;
      this.annTitle = args.ann_title;
      this.annBody = args.ann_body;
      this.annDateCreated = args.ann_date_created;
      this.teacherName = args.teacher_name;
    }
  }
}
