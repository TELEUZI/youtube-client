import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import StorageService, { STORAGE_SERVICE } from 'src/app/core/models/storage-service.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSource$$ = new BehaviorSubject<boolean>(this.getAuthenticated());

  private userNameSource$$ = new Subject<string>();

  public userName$ = this.userNameSource$$.asObservable();

  public isAuthenticated$ = this.isAuthenticatedSource$$.pipe();

  constructor(
    @Inject(STORAGE_SERVICE) private storageService: StorageService,
    private router: Router,
  ) {}

  setAuthenticated(value: boolean) {
    this.isAuthenticatedSource$$.next(value);
  }

  getAuthenticated() {
    return !!this.storageService.get('userToken');
  }

  logOut() {
    this.isAuthenticatedSource$$.next(false);
    this.router.navigateByUrl('/login');
    this.storageService.remove('userToken');
  }

  logIn(userName: string, password: string) {
    this.userNameSource$$.next(userName);
    this.isAuthenticatedSource$$.next(true);
    this.storageService.set(
      'userToken',
      (userName.length + Math.random() * password.length).toString(16),
    );
    this.router.navigateByUrl('/');
  }
}
