<<<<<<< HEAD
=======
// this class handles announcements issued by teachers, and viewable by students

>>>>>>> 031322f3bd6204525b6006ee346add7ca5f9c58a
export class Announcement {
  annID: number;
  annTitle: string;
  annBody: string;
<<<<<<< HEAD
  annDateCreated: string; // have to change this to type date and create a date ts
  teacherID: number;
=======
  annDateCreated: any; // have to change this to type date and create a date ts
  teacherName: string;
>>>>>>> 031322f3bd6204525b6006ee346add7ca5f9c58a


  constructor(args?) {
    if (args) {
      this.annID = args.ann_id;
      this.annTitle = args.ann_title;
      this.annBody = args.ann_body;
      this.annDateCreated = args.ann_date_created;
<<<<<<< HEAD
      this.teacherID = args.teacher_id;
=======
      this.teacherName = args.teacher_name;
>>>>>>> 031322f3bd6204525b6006ee346add7ca5f9c58a
    }
  }
}
