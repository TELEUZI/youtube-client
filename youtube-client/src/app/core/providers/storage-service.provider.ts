import { InjectionToken, Provider } from '@angular/core';
import StorageService from '../models/storage-service.model';
import { LocalStorageService } from '../services/local-storage.service';

export const STORAGE_SERVICE = new InjectionToken<StorageService>('StorageService');
export const STORAGE_SERVICE_PROVIDER: Provider = {
  provide: STORAGE_SERVICE,
  useClass: LocalStorageService,
};
