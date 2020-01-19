import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'
import { API_URL, AUTHENTICATEDTOKEN,AUTHENTICATEDUSER } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private Http:HttpClient) { 
  }

  authenticate(username:string, password:string){
    let basicAuthorization= 'Basic '+window.btoa(username+':'+password)
    let headers = new HttpHeaders({
      Authorization: basicAuthorization
    })
    return this.Http.get<AuthenticationBean>(`${API_URL}/basicAuth`,{headers})
    .pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATEDUSER,username)
          sessionStorage.setItem(AUTHENTICATEDTOKEN,basicAuthorization)
          return data
        }
        
      )
    )

  }
  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATEDUSER);
  }
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
    return sessionStorage.getItem(AUTHENTICATEDTOKEN)
    }
    return null
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATEDUSER)
    let token = sessionStorage.getItem(AUTHENTICATEDTOKEN)
    return !(user===null) && !(token === null)
  }
  logout(){
    sessionStorage.removeItem(AUTHENTICATEDUSER);
    sessionStorage.removeItem(AUTHENTICATEDTOKEN)
  }
}
export class AuthenticationBean{

  constructor(private message:string){}
}
