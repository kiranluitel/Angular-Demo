import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService implements CanActivate{

  constructor(private basicAuthService: BasicAuthenticationService,
    private rotuer: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   
    if (this.basicAuthService.isUserLoggedIn()) {
      return true;

    }
    this.rotuer.navigate(['login'])
    return false;
  }
}
