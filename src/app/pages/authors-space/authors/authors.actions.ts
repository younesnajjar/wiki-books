import {createAction, props} from "@ngrx/store";

import {Author} from "./authors.model";
import {Book} from "../../book-shelf/books/books.model";



export const actionAllAuthors = createAction(
  '[Authors] Get All'
);
export const actionAllAuthorsSuccess = createAction(
  '[Authors] Get All Success',
  props<{ authors: Author[] }>()
);
export const actionAllAuthorsFail = createAction(
  '[Authors] Get All Fail',
  props<{ error: any }>()
);

export const actionGetAuthor = createAction(
  '[Authors] Get Author',
  props<{ id: string }>()
);
export const actionGetAuthorSuccess = createAction(
  '[Authors] Get Author Success',
  props<{ author: Author }>()
);
export const actionGetAuthorFail = createAction(
  '[Authors] Get Author Fail',
  props<{ error: any }>()
);

export const actionGetAuthorBooks = createAction(
  '[Authors] Get Author Books',
  props<{ id: string }>()
);
export const actionGetAuthorBooksSuccess = createAction(
  '[Authors] Get Author Books Success',
  props<{ books: Book[] }>()
);
export const actionGetAuthorBooksFail = createAction(
  '[Authors] Get Author Books Fail',
  props<{ error: any }>()
);
