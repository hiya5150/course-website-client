import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // properties for name, username, password, and type(whather student or teacher)
  private name: string;
  private username: string;
  private password: string;
  public type: any;

  // MatDialogRef refers to dialog box used for login. router is for using router to redirect page
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('You are registered.');

  }
}
