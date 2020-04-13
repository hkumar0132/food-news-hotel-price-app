import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
      <ul class = "items">
        <li (click) = "onSelect(dept)" [class.selected] = "isSelected(dept)" *ngFor = "let dept of departmentList">
          <span class = "badge">{{dept.id}}</span> {{dept.name}}
        </li>
      </ul>
  `,
  styles: []
})

export class DepartmentListComponent implements OnInit {

  public selectedId = 0;

  departmentList = [
    {"id" : 1, "name" : "Angular"},
    {"id" : 2, "name" : "Node"},
    {"id" : 3, "name" : "Spring Boot"},
    {"id" : 4, "name" : "PHP"},
    {"id" : 5, "name" : "Android"}
  ];

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(dept) {
    //Absolute routing -> 
    // this.router.navigate(['/departments', dept.id]);

    //Relative routing -> 
    this.router.navigate([dept.id], {relativeTo : this.route});
  }

  isSelected(dept) {
    return this.selectedId === dept.id;
  }
  
}
