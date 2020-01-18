import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from './service/basic-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements 
HttpInterceptor {

  constructor(private basicAuthService:BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){

    let basicAuthorizationHeader= this.basicAuthService.getAuthenticatedToken();
    let basicAuthenticatedUser=this.basicAuthService.getAuthenticatedUser();

    if(basicAuthenticatedUser && basicAuthorizationHeader){

    
    req = req.clone({
      setHeaders:{
        Authorization: basicAuthorizationHeader
      }
    })
  }
    return next.handle(req);
  }

}
