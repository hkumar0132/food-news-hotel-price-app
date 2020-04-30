import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DBService } from '../mango-db-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loggedIn : boolean = false;

  userModel = new User('', '', '', '', '', '');
  
  constructor(private dbService : DBService) { }

  onSubmit() {
    this.dbService.login(this.userModel.email, this.userModel.password);
  }

}
