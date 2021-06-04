import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food;
  image_url;
  address : string;
  id;
  city;

  constructor(private apiService: ApiService, private router : Router) { }

  ngOnInit(): void {

  }

  navigate() {
    this.apiService.getLocationSuggestion(this.address).subscribe((data)=>{
      this.id = data['location_suggestions'][0]['city_id'];
      this.city = data['location_suggestions'][0]['city_name'];
      console.log(this.id);
      console.log(this.city);
      this.router.navigate(['/food', this.id]);
    });
  }

}
