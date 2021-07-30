import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [SharedModule, FormsModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
