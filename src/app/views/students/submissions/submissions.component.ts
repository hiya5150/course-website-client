import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';
import {WebsiteService} from '../../../models/services/website.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {
 assignments: Assignment[];
  error = '';
  success = '';
  assignment = new Assignment();

  constructor(private websiteService: WebsiteService) { }

  ngOnInit() {

  }

  submitAssignment(f) {
    this.error = '';
    this.success = '';

    this.websiteService.store(this.assignment).subscribe((res: Assignment[]) => {
        // update the list of cars
        this.assignments = res;

        // inform user
        this.success = 'created successfully';

        // reset the form
        f.reset();
      },
      (err) => this.error = err
    );
  }
}
