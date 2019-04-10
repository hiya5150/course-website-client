import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

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

  constructor(public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
  }
}
