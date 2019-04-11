import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {WebsiteService} from '../../../models/services/website.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[];

  constructor(private websiteService: WebsiteService) { }

  ngOnInit() {
  }

  getAssignments(): void {
    this.websiteService.getAssignments().subscribe(
      (res: Assignment[]) => {
        this.assignments = res;
      }
    );
  }

}
