import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../models/teacher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
name: string;
username: string;
password: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('You are registered!');
  }


}
