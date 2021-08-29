import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { YoutubeRoutes } from './models/routes.model';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: YoutubeRoutes.MAIN_PAGE_ROUTE,
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
  { path: YoutubeRoutes.DETAIL_PAGE_ROUTE, component: DetailedInformationPageComponent },
  { path: YoutubeRoutes.ADMIN_PAGE_ROUTE, component: AdminPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class YoutubeRoutingModule {}
