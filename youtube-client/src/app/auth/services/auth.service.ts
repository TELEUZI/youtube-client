import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import StorageService, { STORAGE_SERVICE } from 'src/app/core/models/storage-service.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSource$$ = new BehaviorSubject<Boolean>(false);

  public isAuthenticated$ = this.isAuthenticatedSource$$.pipe();

  constructor(@Inject(STORAGE_SERVICE) private storageService: StorageService) {}

  setAuthenticated(value: boolean) {
    this.isAuthenticatedSource$$.next(value);
  }

  getAuthenticated() {
    this.storageService.get('userName');
  }

  logOut() {
    this.isAuthenticatedSource$$.next(false);
    this.storageService.remove('userName');
  }
}
