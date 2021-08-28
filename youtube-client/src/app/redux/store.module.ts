import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { YoutubeEffects } from './effects/youtube.effect';
import { appReducers } from './reducers/app.reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([YoutubeEffects]),
    // StoreRouterConnectingModule.forRoot(),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
})
export class AppStoreModule {}
