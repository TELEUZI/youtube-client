import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import StorageService from 'src/app/core/models/storage-service.model';
import { STORAGE_SERVICE } from 'src/app/core/providers/storage-service.provider';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly isAuthenticatedSource$$ = new BehaviorSubject<boolean>(this.getAuthenticated());

  private readonly userNameSource$$ = new BehaviorSubject<string>(
    this.storageService.get('userName') || '',
  );

  public readonly userName$ = this.userNameSource$$.pipe();

  public readonly isAuthenticated$ = this.isAuthenticatedSource$$.pipe();

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
    this.storageService.remove('userName');
  }

  logIn(userName: string, password: string) {
    this.userNameSource$$.next(userName);
    this.isAuthenticatedSource$$.next(true);
    this.storageService.set('userName', userName);
    this.storageService.set(
      'userToken',
      (userName.length + Math.random() * password.length).toString(16),
    );
    this.router.navigateByUrl('/');
  }
}
