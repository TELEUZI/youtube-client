import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { RouteNames } from 'src/app/app.constants';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAuthenticated();
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAuthenticated();
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      first(),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigateByUrl(RouteNames.LOGIN);
        }
        return isAuthenticated;
      }),
    );
  }
}
