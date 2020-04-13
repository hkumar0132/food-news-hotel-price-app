import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IEmployee} from './employee';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  public _url : string = "/assets/employees1.json";

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

}