import {createAction, props} from "@ngrx/store";

import {Book} from "./books.model";


/***** @Get Books section *****/
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

/***** @Delete Book section *****/
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

/***** @Create Book section *****/
export const actionAddBook = createAction(
  '[Books] Add Book',
  props<{book: Book}>()
);

export const actionAddBookSuccess = createAction(
  '[Books] Add Book Success',
  props<{book: Book}>()
);

export const actionAddBookFail = createAction(
  '[Books] Add Book Fail',
  props<{error: any}>()
);


/***** @Get One Book section *****/
export const actionGetBook = createAction(
  '[Books] Get Book',
  props<{id: string}>()
);

export const actionGetBookSuccess = createAction(
  '[Books] Get Book Success',
  props<{book: Book}>()
);

export const actionGetBookFail = createAction(
  '[Books] GEt Book Fail',
  props<{error: any}>()
);
