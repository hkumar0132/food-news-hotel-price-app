import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DBService } from '../mango-db-service.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email : string;
  password : string;
  userModel = new User('', '', '', '', '', '');
  email_pattern : string = "";

  constructor(private dbService : DBService, private router : Router) { }

  onSubmit() {
    const details = { email : this.email, password : this.password };
    this.dbService.addTodo(details);

    // this.dbService.register(details);  
  }
}
