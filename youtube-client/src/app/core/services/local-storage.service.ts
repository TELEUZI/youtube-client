import { Inject, Injectable } from '@angular/core';
import StorageService from '../models/storage-service.model';
import { LOCAL_STORAGE } from '../providers/storage.provider';

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
