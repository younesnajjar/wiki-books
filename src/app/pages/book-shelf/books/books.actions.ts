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
