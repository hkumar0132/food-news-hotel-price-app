import { Component, OnInit } from '@angular/core';
import { JwtService } from './jwt.service';
import { DBService } from './mango-db-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  username = 'XYZ';
  password = 'ahe%ejape';

  constructor(private jwt : JwtService, private dbService : DBService) {

  }
  
  ngOnInit() {
      this.jwt
      .login(this.username, this.password)
      .subscribe(
      (data) => {
        // console.log(data);
      }
    );
    this.dbService.initDB();
  }

}
