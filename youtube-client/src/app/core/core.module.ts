import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../youtube/providers/http-interceptors.provider';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { LoginInformationComponent } from './components/header/login-information/login-information.component';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { STORAGE_SERVICE_PROVIDER } from './providers/storage-service.provider';
import { WINDOW_PROVIDER } from './providers/window.provider';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginInformationComponent, NotFoundComponent],
  imports: [SharedModule, FormsModule, CoreRoutingModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [WINDOW_PROVIDER, STORAGE_SERVICE_PROVIDER, httpInterceptorProviders],
})
export class CoreModule {}
