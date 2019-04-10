import { Component, OnInit } from '@angular/core';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
 assignments: Assignment[];
  error = '';
  success = '';
  assignment = new Assignment('', 0);

  constructor() { }

  ngOnInit() {
  }

  submitAssignment(f){
    this.error = '';
    this.success = '';

    this.carService.store(this.car).subscribe((res: Car[]) => {
        // update the list of cars
        this.cars = res;

        // inform user
        this.success = 'created successfully';

        // reset the form
        f.reset();
      },
      (err) => this.error = err
    );
  }
}
