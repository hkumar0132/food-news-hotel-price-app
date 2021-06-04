import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  template : `
  <h1 style = "text-align : center; font-size :40px; margin-bottom:50px;margin-top: 30px;"><b>Latest news</b></h1>
    <div style = "background : #808080; color : " *ngFor="let article of articles">
    <h2 style = "color: ghostwhite"><b>{{article.title}}</b></h2>
      <p><b>
        {{article.description}}
        </b></p>
      <a class = "btn btn-success" href="{{article.url}}">Read full article</a>
      <hr>
    </div>            
  `,
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
