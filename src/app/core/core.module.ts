import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TabMenuModule} from 'primeng/tabmenu';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {MenubarModule} from "primeng/menubar";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    RouterModule,

    // primeng
    ToastModule,
    TabMenuModule,

    // ngrx
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
        name: 'WikiBooks' // Redux Dev Tools
      }),
  ],
  providers: [MessageService],
  exports: [

    // primeng
    ToastModule,
    ToastModule,
    TabMenuModule,
    MenubarModule
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
