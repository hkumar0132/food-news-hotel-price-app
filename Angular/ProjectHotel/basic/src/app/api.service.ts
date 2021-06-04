import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public platform: any;
  public geocoder: any;

  API_KEY_NEWS = '521afa31ea42419ca5f4f2af18ed3939';
  API_KEY_FOOD = 'fad2d5d381a9023c8283aef3d363f052';

  constructor(private httpClient : HttpClient) { 
    
  }

  public getNews(){
    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY_NEWS}`);
  }
  
  public getLocationSuggestion(address : string) {
    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query=${address}`);
  }
  public getFood(id : number){
    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city`);
  }
} 
