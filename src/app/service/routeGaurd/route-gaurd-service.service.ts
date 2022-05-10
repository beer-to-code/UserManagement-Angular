import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserauthService } from '../auth/userAuth/userauth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdServiceService implements CanActivate {

  constructor(private servicelogin: UserauthService,
    private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.servicelogin.isLoggedIn()) {
      return true;
    } else {

      this.router.navigate(['/login'])
      return false;

    }
  }

}
