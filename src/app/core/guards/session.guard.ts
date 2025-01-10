import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class SessionGuard implements CanActivate {

  constructor(private cookie: CookieService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession()
  }

  checkCookieSession(): boolean {
    try {
      const token: boolean = this.cookie.check('token')
      if (token){
        return true
      } else {
        this.router.navigate(['/', 'auth'])
        return false
      }
    } catch (error) {
      console.log('Algo sucedio: ', error)
      return false
    }
  }

};
