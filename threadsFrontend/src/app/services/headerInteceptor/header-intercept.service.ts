import { Injectable } from '@angular/core';
import { AuthorizationService } from '../auth/authorization.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptService implements  HttpInterceptor{

  constructor(private authorization: AuthorizationService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwt = this.authorization.getToken();
    if(jwt && this.authorization.testLogin() == false){
      alert("Login credentials expired. Please log in again");
    }
    else if(jwt){
      console.log(next.handle(req.clone({headers: req.headers.set("Authorization", jwt)})))
      return next.handle(req.clone({headers: req.headers.set("Authorization", jwt)}))
    }
    console.log(req)
    return next.handle(req);
  }

}
