import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksContainerComponent } from './books/components/books-container.component';

import {SharedModule} from "../../shared/shared.module";

import { BookShelfRoutingModule } from './book-shelf-routing.module';
import {BooksEffects} from "./books/books.effects";
import {FEATURE_NAME, reducers} from "./book-shelf.state";

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { BookFormComponent } from './books/components/book-form/book-form.component';


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
      BooksEffects
    ]),
    SharedModule,
  ]
})
export class BookShelfModule { }
