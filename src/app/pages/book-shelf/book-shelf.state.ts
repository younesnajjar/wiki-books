import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

import {BooksState} from "./books/books.model";
import {booksReducer} from "./books/books.reducer";
import {FormState} from "./book-form/form.model";
import {formReducer} from "./book-form/form.reducer";
import {AuthorsState} from "./authors/authors.model";
import {authorsReducer} from "./authors/authors.reducer";

export const FEATURE_NAME = 'bookShelf';
export const selectBookShelf =
  createFeatureSelector<State, BookShelfState>(FEATURE_NAME);
export const reducers: ActionReducerMap<BookShelfState> = {
  books: booksReducer,
  form: formReducer,
  authors: authorsReducer
};

export interface BookShelfState {
  books: BooksState;
  form: FormState;
  authors: AuthorsState
}

export interface State {
  bookShelf: BookShelfState;
}
