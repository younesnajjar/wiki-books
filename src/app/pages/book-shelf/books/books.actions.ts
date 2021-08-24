import {createAction, props} from "@ngrx/store";

import {Book} from "./books.model";


export const actionGetBooks = createAction(
  '[Books] Get All'
);
export const actionAllBooksSuccess = createAction(
  '[Books] Get All Books Success',
  props<{ books: Book[] }>()
);
export const actionAllBooksFail = createAction(
  '[Books] Get All Books Fail',
  props<{ error: any }>()
);
export const actionDeleteBook = createAction(
  '[Books] Delete Book',
  props<{book: Book}>()
);

export const actionDeleteBookSuccess = createAction(
  '[Books] Delete Book Success',
  props<{id: number}>()
);

export const actionDeleteBookFail = createAction(
  '[Books] Delete Book Fail',
  props<{error: any, id: number}>()
);
