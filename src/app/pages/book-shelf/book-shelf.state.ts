import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

import {BooksState} from "./books/books.model";
import {booksReducer} from "./books/books.reducer";
import {State} from "../../core/core.state";

export const BOOK_SHELF_FEATURE_NAME = 'bookShelf';
export const selectBookShelf =
  createFeatureSelector<State, BookShelfState>(BOOK_SHELF_FEATURE_NAME);
export const bookShelfReducers: ActionReducerMap<BookShelfState> = {
  books: booksReducer,
};

export interface BookShelfState {
  books: BooksState;
}

