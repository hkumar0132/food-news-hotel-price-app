import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';

const routes: Routes = [

  { path : '', redirectTo : '/department-list', pathMatch : 'full' },//{path : '', component : DepartmentListComponent},
  { path : 'department-list', component : DepartmentListComponent },
  {
    path : 'department-list/:id', 
    component : DepartmentDetailComponent,
    //Child routes
    children : [
      { path : 'overview', component : DepartmentOverviewComponent },
      { path : 'contact', component : DepartmentContactComponent }
    ]
  },
  { path : 'employee-list', component : EmployeeListComponent },
  {
     path : 'employee-list/:id', 
     component : EmployeeDetailComponent,
     //Child routes
     children : [
       { path : 'overview', component : EmployeeOverviewComponent },
       { path : 'contact', component : EmployeeContactComponent }
     ]
  },
  
  { path : '**', component : PageNotFoundComponent } //Wild Card routing i.e. must be at the bottom
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// export const routingComponents = [DepartmentListComponent, EmployeeListComponent]
