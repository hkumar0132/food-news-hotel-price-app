import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3>Employee List<h3>
    <ul class = "items">
      <li (click) = "onSelect(emp)" [class.selected] = "isSelected(emp)" *ngFor = "let emp of employeeList">
        <span class = "badge">{{emp.id}}</span> {{emp.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public selectedId : number = 0;

  employeeList = [
    {"id" : 1, "name" : "Himanshu"},
    {"id" : 2, "name" : "Anshu"},
    {"id" : 3, "name" : "Golu"},
    {"id" : 4, "name" : "Sonu"},
    {"id" : 5, "name" : "Ramesh"},
  ];

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(emp) {
    //Relative routing
    this.router.navigate([emp.id], {relativeTo : this.route});
  }

  isSelected(emp) {
    return emp.id == this.selectedId;
  }
}
