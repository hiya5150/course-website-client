import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private name: string;
  private username: string;
  private password: string;
  public type: any;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('You are registered.');
    // this belongs on login page
    if (this.type === 'teacher') {
      this.router.navigate(['teachers-homepage']);
      console.log('You are a teacher.');
    // } else {
    //   this.router.navigate(['students-homepage']);
    }
  }
}
