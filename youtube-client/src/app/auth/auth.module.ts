import { NgModule } from '@angular/core';
import { STORAGE_SERVICE } from '../core/models/storage-service.model';
import { LocalStorageService } from '../core/services/local-storage.service';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [SharedModule],
  providers: [{ provide: STORAGE_SERVICE, useClass: LocalStorageService }],
  exports: [],
})
export class AuthModule {}
