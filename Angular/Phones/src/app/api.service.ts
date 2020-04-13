import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Smartphone } from './smartphone';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

const localUrl = 'assets/data/smartphone.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
  
  getSmartphone(): Observable<any> {
    return this.http.get<Smartphone[]>(localUrl).pipe(
      catchError(this.handleError<Smartphone[]>('getSmartphone', [])));
  }
}
