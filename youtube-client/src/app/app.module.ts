import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { FilterResultsComponent } from './search/filter-results/filter-results.component';
import { LoginInformationComponent } from './header/login-information/login-information.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchResultsComponent, SearchItemComponent, FilterResultsComponent, LoginInformationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
