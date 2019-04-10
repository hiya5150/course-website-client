import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../../models/announcement';
import {Grade} from '../../../models/grade';
import {WebsiteService} from '../../../models/services/website.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  grades: Grade[];
  constructor(private websiteService: WebsiteService) { }

  ngOnInit() {
  }
  getAnnouncements(): void {
    this.websiteService.getGrades().subscribe(
      (res: Grade[]) => {
        this.grades = res;
      }
    );
  }
}
