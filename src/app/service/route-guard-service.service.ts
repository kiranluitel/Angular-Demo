import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService implements CanActivate{

  constructor(private hardCodedAuthentication: HardCodedAuthenticationService,
    private rotuer: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   
    if (this.hardCodedAuthentication.isUserLoggedIn()) {
      return true;

    }
    this.rotuer.navigate(['login'])
    return false;
  }
}
