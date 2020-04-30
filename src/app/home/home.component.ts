import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CatService } from '../cat.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { DBService } from '../mango-db-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  address;
  city : string = '';
  checkin : Date;
  checkout : Date;
  roomtype;
  claims;
  username = 'ABC';
  password = 'ahe%ejape';

  constructor(private oauthService : OAuthService, 
     private apiService : ApiService, private router : Router, private jwt : JwtService,
     private dbService : DBService) { 

  }
 
  ngOnInit() {
    this.jwt
    .login(this.username, this.password)
    .subscribe(
  );
  
  this.dbService.initDB();
}
  navigate() {
    this.apiService.getLocationSuggestion(this.address)
    .subscribe(data => {
        this.city = data['location_suggestions'][0]['city_name'];
        this.router.navigate(['/city', this.city]);

      });
  }
}
