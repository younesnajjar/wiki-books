import {Action, createReducer, on} from "@ngrx/store";

import {BooksState} from "./books.model";
import {LoadingState} from "../../../shared/models/call-state.model";
import * as booksAction from "./books.actions";

export const initialState: BooksState = {
  items: [],
  callState: LoadingState.INIT
}


const reducer = createReducer(
  initialState,
  on(booksAction.actionGetBooks, (state) => ({
      ...state,
      callState: LoadingState.LOADING
    }),
  ),
  on(booksAction.actionAllBooksSuccess, (state, {books}) => ({
      ...state,
      items: books,
      callState: LoadingState.LOADED
    }),
  ),
  on(booksAction.actionAllBooksFail, (state, {error}) => ({
      ...state,
      callState: {errorMsg: error.errorMsg}
    }),
  ),
)

export function booksReducer(state: BooksState | undefined, action: Action) {
  return reducer(state, action);
}
