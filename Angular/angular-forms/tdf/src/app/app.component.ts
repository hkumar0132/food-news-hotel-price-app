import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hasError : boolean = true;
  title : string = 'tdf';
  topics : Array<string> = ['Angular', 'Spring Boot', 'HTML', 'CSS', 'Javascript', 'Typescript']; 
  userModel = new User('', 'hkumar0132@gmail.com', '', 'default', 'morning', true);
  submitted : boolean = false;
  errorMsg : string = "";
  
  //The topic value might be populated by an API and will not neccessarily be 
  //'' always. Hence the following function is resposible for displaying error 
  //in case value is different(here, it's 'default')

  constructor(private _enrollmentService : EnrollmentService) {}

  validateTopic(value) {
    if(value === 'default')
      this.hasError = true;
    else  
      this.hasError = false;
  }

  onSubmit() {
    this.submitted = true;
     this._enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log("Success!", data),
          error => this.errorMsg = error.statusText
        );
  }
}
