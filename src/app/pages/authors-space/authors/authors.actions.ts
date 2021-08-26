import {createAction, props} from "@ngrx/store";

import {Author} from "./authors.model";



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
