import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl : './hotels.component.html',
  styleUrls : ['./hotels.component.css']

})

export class HotelsComponent implements OnInit {

  constructor(private jwt : JwtService, private route : ActivatedRoute) { }

  hotelList : object = {};

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let city = params.get('cityName');
      this.jwt.search(city).
        subscribe((data) => {
          this.hotelList = data['comparison'];
        });
    });
  }

}
