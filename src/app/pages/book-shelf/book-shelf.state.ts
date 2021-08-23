import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

import {BooksState} from "./books/books.model";
import {booksReducer} from "./books/books.reducer";

export const FEATURE_NAME = 'bookShelf';
export const selectBookShelf =
  createFeatureSelector<State, BookShelfState>(FEATURE_NAME);
export const reducers: ActionReducerMap<BookShelfState> = {
  books: booksReducer,
};

export interface BookShelfState {
  books: BooksState;
}

export interface State {
  bookShelf: BookShelfState;
}
