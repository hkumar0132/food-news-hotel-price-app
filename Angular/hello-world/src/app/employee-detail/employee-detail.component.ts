import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
              <h2>{{errorMsg}}</h2>
              <ul *ngFor = "let emp of employeeList">
                <li>{{emp.id}}. {{emp.name}} - {{emp.age}}</li>
              </ul>
            `,
  styles: [`

          `]
})

export class EmployeeDetailComponent implements OnInit {

  public employeeList = [];
  public errorMsg = "";

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employeeList = data, 
                error => this.errorMsg = error);
  }

}
