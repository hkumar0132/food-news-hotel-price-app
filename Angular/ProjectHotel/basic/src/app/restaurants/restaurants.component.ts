import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  res_found;
  res_shown;
  rest;
  review;
  image_url;

  constructor(private apiService: ApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.apiService.getFood(id).
        subscribe((data) => {
          this.res_found = data['results_found'];
          this.res_shown = data['results_shown'];
          this.rest = data['restaurants'];
          // this.image_url = + this.rest['url'];
          // console.log(this.image_url);

          console.log(this.rest);

          this.review = data['review'];
        });
    });
  }

}
