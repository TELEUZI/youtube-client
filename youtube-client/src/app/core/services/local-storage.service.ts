import { Inject, inject, Injectable, InjectionToken } from '@angular/core';
import StorageService from '../models/storage-service.model';

export const LOCAL_STORAGE = new InjectionToken<Storage>('localStorage abstraction', {
  factory: () => inject(Window).localStorage,
});
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements StorageService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

  get(name: string): string | null {
    return this.localStorage.getItem(name);
  }

  set(name: string, value: string): void {
    this.localStorage.setItem(name, value);
  }

  remove(name: string): void {
    this.localStorage.removeItem(name);
  }
}
