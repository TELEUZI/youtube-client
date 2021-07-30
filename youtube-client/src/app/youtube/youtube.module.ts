import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FilterResultsComponent } from './components/filter/filter-results/filter-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    FilterResultsComponent,
    SearchResultsComponent,
    SearchItemComponent,
    DefaultComponent,
  ],
  imports: [SharedModule, HttpClientModule],
  exports: [FilterResultsComponent, SearchResultsComponent, SearchItemComponent],
  // providers: [HttpClient],
})
export class YoutubeModule {}
