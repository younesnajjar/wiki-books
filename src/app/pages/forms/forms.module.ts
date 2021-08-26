import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './forms-routing.module';
import {EffectsModule} from "@ngrx/effects";
import {FormEffects} from "./book-form/form.effects";
import {StoreModule} from "@ngrx/store";
import {BookFormComponent} from "./book-form/components/book-form.component";
import {SharedModule} from "../../shared/shared.module";
import {FORMS_FEATURE_NAME, formsReducer} from "./forms.state";
import {BOOK_SHELF_FEATURE_NAME, bookShelfReducers} from "../book-shelf/book-shelf.state";
import {AUTHORS_SPACE_FEATURE_NAME, authorsSpaceReducers} from "../authors-space/authors-space.state";
import {AuthorsEffects} from "../authors-space/authors/authors.effects";


@NgModule({
  declarations: [
    BookFormComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    StoreModule.forFeature(FORMS_FEATURE_NAME, formsReducer),
    StoreModule.forFeature(AUTHORS_SPACE_FEATURE_NAME, authorsSpaceReducers),
    StoreModule.forFeature(BOOK_SHELF_FEATURE_NAME, bookShelfReducers),
    EffectsModule.forFeature([
      FormEffects,
      AuthorsEffects
    ]),

    SharedModule
  ]
})
export class FormsModule { }
