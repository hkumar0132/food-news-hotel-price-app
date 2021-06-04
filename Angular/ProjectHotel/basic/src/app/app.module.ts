import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FoodComponent } from './food/food.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './interceptor';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CatService } from './cat.service';
import { HotelsearchComponent } from './hotelsearch/hotelsearch.component';
import { OAuthModule } from "angular-oauth2-oidc";
import { DBService } from './mango-db-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    HotelsComponent,
    NewsComponent,
    FoodComponent,
    RestaurantsComponent,
    HotelsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['http://localhost:4200/auth']
      }
    }),
    OAuthModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    [CatService],
    [OAuthModule],
    [DBService]
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
