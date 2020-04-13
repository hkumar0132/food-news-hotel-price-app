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

export class HomeComponent {
  
  address;
  city : string = '';
  checkin : Date;
  checkout : Date;
  roomtype;
  claims;

  constructor(private oauthService : OAuthService, 
     private apiService : ApiService, private router : Router, private cat : CatService,
     private dbService : DBService) { 

  }

  navigate() {
    this.apiService.getLocationSuggestion(this.address)
    .subscribe(data => {
        this.city = data['location_suggestions'][0]['city_name'];
        this.router.navigate(['/city', this.city]);
        // this.router.navigate(['/search', this.city]);
      });
  }


  // logout() {
  //   this.jwt.logout();
  //   console.log("Logged out")
  // }

  // loginCheck() {
  //   console.log("Logged in : " + this.jwt.loggedIn())
  // }
}
