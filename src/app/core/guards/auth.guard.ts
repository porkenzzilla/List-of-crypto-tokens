import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';
import {USER_ROLE} from '../interfaces/user.interface';
import {SnackBarService} from '../common-services/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private _snackBar: SnackBarService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree {

    if (this.authService.currentUserValue?.role === USER_ROLE.ADMIN) {
      return true;
    }
    else{
    this._snackBar.openSnackBar('You not allowed to enter this page', 'ok', 5000);
    this.router.navigate(['']);
    return false;
    }
  }

}
