import { Injectable } from '@angular/core';
import StorageService from '../models/storage-service.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements StorageService {
  constructor(private localStorage: Storage) {}

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
