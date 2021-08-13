/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import StorageService from '../models/storage-service.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements StorageService {
  get(name: string): string | null {
    return localStorage.getItem(name);
  }

  set(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  remove(name: string): void {
    localStorage.removeItem(name);
  }
}
