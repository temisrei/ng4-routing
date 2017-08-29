import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authSvc: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                // return false;
                this.authSvc.isAuthenticated()
                  .then(
                    (authenticated: boolean) => {
                      if (authenticated) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                  );
              }
}
