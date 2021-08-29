import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { FilterResultsComponent } from './components/filter/filter-results/filter-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    FilterResultsComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterPipe,
    MainPageComponent,
    SortPipe,
    BorderColorDirective,
    DetailedInformationPageComponent,
    BaseCardComponent,
    AdminPageComponent,
  ],
  imports: [SharedModule, YoutubeRoutingModule],
  exports: [MainPageComponent],
})
export class YoutubeModule {}
