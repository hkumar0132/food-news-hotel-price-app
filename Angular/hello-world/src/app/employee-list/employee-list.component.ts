import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
            <h2>{{errorMsg}}</h2>
            <ul *ngFor="let emp of employeeList">
              <li>{{emp.name}}</li>
            </ul>
            `,
  styles: [`

          `]
})

export class EmployeeListComponent implements OnInit {

  public employeeList = [];
  public errorMsg = "";

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employeeList = data,
        error => this.errorMsg = error);
  }

}






