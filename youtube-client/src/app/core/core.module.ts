import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { LoginInformationComponent } from './components/header/login-information/login-information.component';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginInformationComponent, NotFoundComponent],
  imports: [SharedModule, FormsModule, CoreRoutingModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
