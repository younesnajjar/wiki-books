import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

import {BooksState} from "./books/books.model";
import {booksReducer} from "./books/books.reducer";
import {FormState} from "../forms/book-form/form.model";
import {AuthorsState} from "./authors/authors.model";
import {authorsReducer} from "./authors/authors.reducer";
import {FormsState} from "../forms/forms.state";

export const FEATURE_NAME = 'bookShelf';
export const selectBookShelf =
  createFeatureSelector<State, BookShelfState>(FEATURE_NAME);
export const reducers: ActionReducerMap<BookShelfState> = {
  books: booksReducer,
  authors: authorsReducer
};

export interface BookShelfState {
  books: BooksState;
  authors: AuthorsState
}

export interface State {
  bookShelf: BookShelfState;
  forms: FormsState;
}
