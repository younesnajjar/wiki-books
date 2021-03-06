import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";

import {TabMenuModule} from 'primeng/tabmenu';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {CheckboxModule} from "primeng/checkbox";
import {TimelineModule} from "primeng/timeline";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";



import { NavigationTimelineComponent } from './components/navigation-timeline/navigation-timeline.component';
import {NavigationHistoryEffects} from "./store/history/navigation-history/navigation-history.effects";
import {HISTORY_FEATURE_NAME, historyReducers} from "./store/history/history.state";


import {environment} from "../../environments/environment";
import {BooksEffects} from "./store/error.effects";
import {BackButtonDirective} from "./directives/back.directive";
import {NavigationService} from "./services/navigation.service";


@NgModule({
  declarations: [
    NavigationTimelineComponent,
    BackButtonDirective
  ],
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    RouterModule,

    // primeng
    ToastModule,
    TabMenuModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    FormsModule,
    CheckboxModule,

    // ngrx
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreModule.forFeature(HISTORY_FEATURE_NAME, historyReducers),
    EffectsModule.forRoot([
      NavigationHistoryEffects,
      BooksEffects
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
        name: 'WikiBooks' // Redux Dev Tools
      }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: 1
    }),
  ],
  providers: [MessageService, NavigationService],
  exports: [

    // primeng
    ToastModule,
    TabMenuModule,
    NavigationTimelineComponent,
    BackButtonDirective
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }

  }
}
