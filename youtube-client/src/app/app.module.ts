import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { API_SERVICE } from './youtube/models/api-service.model';
import { YoutubeApiService } from './youtube/services/youtube-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [{ provide: API_SERVICE, useClass: YoutubeApiService, deps: [HttpClient] }],
  bootstrap: [AppComponent],
})
export class AppModule {}
