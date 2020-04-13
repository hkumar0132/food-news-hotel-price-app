import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h3>You selected employee with id = {{employeeId}}</h3>
    <p>
      <button (click) = "showOverview()">Overview</button>
      <button (click) = "showContact()">Contact</button>
    </p>
    <p>
      <button (click) = "gotoPrevious()">Previous</button>
      <button (click) = "gotoNext()">Next</button>
    </p>
    <p><button (click) = "gotoEmployees()">Back</button></p>
    <p><b>{{display}}</b></p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employeeId : number = 0;
  public display : string = "";
  
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    });
  }

  gotoPrevious() {
    let id = this.employeeId - 1;
    if(id >= 1)
      this.router.navigate(['/employee-list', id]);
    else
      this.display = "No previous departments";
  }

  gotoNext() {
    let id = this.employeeId + 1;
    if(id <= 5)
      this.router.navigate(['/employee-list', id]);
    else  
      this.display = "No next departments";
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo : this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo : this.route});
  }

  gotoEmployees() {
    let selectedId = this.employeeId ? this.employeeId : null;
    this.router.navigate(['../', {id : selectedId}], {relativeTo : this.route});
  }

}
