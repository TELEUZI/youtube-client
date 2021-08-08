import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FilterResultsComponent } from './components/filter/filter-results/filter-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { API_SERVICE } from './models/api-service.model';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterVideoService } from './services/filter-video.service';
import { YoutubeApiService } from './services/youtube-api.service';

function videoServiceFactory(httpClient: HttpClient) {
  return new YoutubeApiService(httpClient);
}
@NgModule({
  declarations: [
    FilterResultsComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterPipe,
    MainPageComponent,
    SortPipe,
    BorderColorDirective,
  ],
  imports: [SharedModule, HttpClientModule],
  exports: [FilterResultsComponent, SearchResultsComponent, SearchItemComponent],
  providers: [
    { provide: API_SERVICE, useFactory: videoServiceFactory, deps: [HttpClient] },
    FilterVideoService,
  ],
})
export class YoutubeModule {}
