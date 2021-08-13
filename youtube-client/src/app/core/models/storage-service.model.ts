import { InjectionToken } from '@angular/core';

export const STORAGE_SERVICE = new InjectionToken<StorageService>('StorageService');
export default interface StorageService {
  get(name: string): string | null;
  set(name: string, value: string): void;
  remove(name: string): void;
}
