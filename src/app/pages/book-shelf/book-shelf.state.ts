import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

import {BooksState} from "./books/books.model";
import {booksReducer} from "./books/books.reducer";
import {AuthorsState} from "../authors-space/authors/authors.model";
import {FormsState} from "../forms/forms.state";
import {HistoryState} from "../../core/store/history/history.state";

export const BOOK_SHELF_FEATURE_NAME = 'bookShelf';
export const selectBookShelf =
  createFeatureSelector<State, BookShelfState>(BOOK_SHELF_FEATURE_NAME);
export const bookShelfReducers: ActionReducerMap<BookShelfState> = {
  books: booksReducer,
};

export interface BookShelfState {
  books: BooksState;
}

export interface State {
  bookShelf: BookShelfState;
  authorsSpace: AuthorsState
  forms: FormsState;
  history: HistoryState
}
