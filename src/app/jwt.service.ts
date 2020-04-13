import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class JwtService {

  constructor(private httpClient: HttpClient) { }
      
  login(username : string, password : string) {
    
      return this.httpClient.post<{access_token:string}>('https://cors-anywhere.herokuapp.com/https://api.makcorps.com/auth', {username, password}).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
      }))
  }

  search(city : string) : Observable<any>{
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://api.makcorps.com/free/" + city);
  }
  
  // searchByHotelName(hotelName : string, rooms : number, guest : number, checkIn : Date, checkOut : Date) {
  //   return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://api.makcorps.com/" + hotelName + "/USD/" + guest + "/" + rooms + "/" + checkIn + "/" + checkOut)
  // }

  logout() {
    localStorage.removeItem('access_token');
  }

  loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
}