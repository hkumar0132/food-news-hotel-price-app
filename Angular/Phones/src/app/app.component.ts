import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Smartphone } from './smartphone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phones';
  smartphone: Smartphone[] = [];
  headers: string[];

  constructor(private api: ApiService) {}

  getSmartphones() {
    this.api.getSmartphone()
      .subscribe(data => {
        console.log(data);
      });
  }

}
