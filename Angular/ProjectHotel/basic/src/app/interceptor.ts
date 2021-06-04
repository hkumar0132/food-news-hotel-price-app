import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
  } from '@angular/common/http';
import { JwtService } from './jwt.service';
import { onErrorResumeNext, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable(

)
export class Interceptor implements HttpInterceptor {

    constructor(public jwt : JwtService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('access_token');

        if (token) {
            request = request.clone({ 
                headers: request.headers.set('Authorization', 'JWT ' + token) 
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                 headers: request.headers.set('Content-Type', 'application/json') 
            });
        }

        request = request.clone({
             headers: request.headers.set('Accept', 'application/json') 
        });

        request = request.clone({
            headers: request.headers.set('user-key', 'fad2d5d381a9023c8283aef3d363f052') 
       });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event : ', event);
                }
                return event;
            }));
    }
}
