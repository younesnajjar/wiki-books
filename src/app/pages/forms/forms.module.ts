import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './forms-routing.module';
import {EffectsModule} from "@ngrx/effects";
import {FormEffects} from "./book-form/form.effects";
import {StoreModule} from "@ngrx/store";
import {BookFormComponent} from "./book-form/components/book-form.component";
import {SharedModule} from "../../shared/shared.module";
import {FEATURE_NAME, reducers} from "./forms.state";


@NgModule({
  declarations: [
    BookFormComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([
      FormEffects,
    ]),

    SharedModule
  ]
})
export class FormsModule { }
