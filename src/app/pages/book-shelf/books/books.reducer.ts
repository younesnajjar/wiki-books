import {Action, createReducer, on} from "@ngrx/store";

import {BooksState} from "./books.model";
import {LoadingState} from "../../../shared/models/call-state.model";
import * as booksAction from "./books.actions";

export const initialState: BooksState = {
  items: [],
  callState: LoadingState.INIT,
  onDeleteItems: []
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
  on(booksAction.actionDeleteBook, (state, {book}) => ({
      ...state,
      onDeleteItems: [...state.onDeleteItems, book.id]
    }),
  ),
  on(booksAction.actionDeleteBookSuccess, (state, {id}) => ({
      ...state,
      items: state.items.filter(item => item.id !== id ),
      onDeleteItems: state.onDeleteItems.filter(itemId => itemId !== id)
    }),
  ),
  on(booksAction.actionDeleteBookFail, (state, {error, id}) => ({
      ...state,
      onDeleteItems: state.onDeleteItems.filter(itemId => itemId !== id)
    }),
  ),
)

export function booksReducer(state: BooksState | undefined, action: Action) {
  return reducer(state, action);
}
