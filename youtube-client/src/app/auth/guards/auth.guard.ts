import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { RouteNames } from 'src/app/core/app.constants';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAuthenticated();
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      first(),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigateByUrl(RouteNames.LOGIN);
        }
      }),
    );
  }
}
