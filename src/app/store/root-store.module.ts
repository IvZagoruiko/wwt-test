import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './effects';

@NgModule({
  declarations: [],
  imports: [
    // ToDo : Denis answer 3
    StoreModule.forRoot({
      auth: authReducer
    }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class RootStoreModule {
}
