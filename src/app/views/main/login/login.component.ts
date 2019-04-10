import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {

    console.log('You are logged in');
  }
}
