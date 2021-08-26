import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import { BooksContainerComponent } from './books/components/books-container.component';

import {SharedModule} from "../../shared/shared.module";

import { BookShelfRoutingModule } from './book-shelf-routing.module';
import {BooksEffects} from "./books/books.effects";
import {BOOK_SHELF_FEATURE_NAME, bookShelfReducers} from "./book-shelf.state";

import { BookViewComponent } from './book-view/book-view.component';

@NgModule({
  declarations: [
    BooksContainerComponent,
    BookViewComponent
  ],
  imports: [
    CommonModule,
    BookShelfRoutingModule,
    StoreModule.forFeature(BOOK_SHELF_FEATURE_NAME, bookShelfReducers),
    EffectsModule.forFeature([
      BooksEffects
    ]),
    SharedModule
  ]
})
export class BookShelfModule { }
