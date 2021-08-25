import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import { BooksContainerComponent } from './books/components/books-container.component';

import {SharedModule} from "../../shared/shared.module";

import { BookShelfRoutingModule } from './book-shelf-routing.module';
import {BooksEffects} from "./books/books.effects";
import {FEATURE_NAME, reducers} from "./book-shelf.state";


import { BookFormComponent } from './book-form/components/book-form.component';
import {FormEffects} from "./book-form/form.effects";
import {AuthorsEffects} from "./authors/authors.effects";


@NgModule({
  declarations: [
    BooksContainerComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BookShelfRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([
      BooksEffects,
      FormEffects,
      AuthorsEffects
    ]),
    SharedModule
  ]
})
export class BookShelfModule { }
