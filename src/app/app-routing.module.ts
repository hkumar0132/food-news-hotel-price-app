import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { NewsComponent } from './news/news.component';
import { FoodComponent } from './food/food.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


const routes: Routes = [

  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },
  { path : 'city/:cityName', component : HotelsComponent },
  { path : 'news', component: NewsComponent },
  { path : 'food', component : FoodComponent },
  { path : 'food/:id', component: RestaurantsComponent},
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : '**', component : PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
