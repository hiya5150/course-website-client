import {Component, OnInit, ViewChild} from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {Announcement} from '../../../models/announcement';
import {StudentsService} from '../../../models/services/students.service';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-announcements',
  templateUrl: './students-announcements.component.html',
  styleUrls: ['./students-announcements.component.scss']
})
export class StudentsAnnouncementsComponent implements OnInit {
  announcements: Announcement[];
  displayedColumns: string[] = ['annTitle', 'annBody', 'teacherName', 'annDateCreated'];
  constructor(private studentsService: StudentsService) {}
    annTitle: string;
    annBody: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getAnnouncements();
  }
  getAnnouncements(): void {
      this.studentsService.getAnnouncements().subscribe((res) => {this.announcements = res;
      }
      );
  }
}
