import {Action, createReducer, on} from "@ngrx/store";

import {BooksState} from "./books.model";
import {LoadingState} from "../../../shared/models/call-state.model";
import * as booksAction from "./books.actions";

export const initialState: BooksState = {
  items: [],
  callState: LoadingState.INIT,
  selectedItem: null,
  itemCallState: LoadingState.INIT,
  onDeleteItems: [],
  bookOnCreation: false
}


const reducer = createReducer(
  initialState,

  /***** @Get Books section *****/
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

  /***** @Delete Book section *****/
  on(booksAction.actionDeleteBook, (state, {book}) => ({
      ...state,
      onDeleteItems: [...state.onDeleteItems, book.id]
    }),
  ),
  on(booksAction.actionDeleteBookSuccess, (state, {id}) => ({
      ...state,
      items: state.items.filter(item => item.id !== id),
      onDeleteItems: state.onDeleteItems.filter(itemId => itemId !== id)
    }),
  ),
  on(booksAction.actionDeleteBookFail, (state, {id}) => ({
      ...state,
      onDeleteItems: state.onDeleteItems.filter(itemId => itemId !== id)
    }),
  ),

  /***** @Add One Book Creation *****/
  on(booksAction.actionAddBook, (state) => ({
      ...state,
      bookOnCreation: true
    }),
  ),
  on(booksAction.actionAddBookSuccess, (state, {book}) => ({
      ...state,
      items: [...state.items, book],
      bookOnCreation: false
    }),
  ),
  on(booksAction.actionAddBookFail, (state,) => ({
      ...state,
      bookOnCreation: false
    }),
  ),

  /***** @Add One Book section *****/

  on(booksAction.actionGetBook, (state) => ({
      ...state,
      itemCallState: LoadingState.LOADING
    }),
  ),
  on(booksAction.actionGetBookSuccess, (state, {book}) => ({
      ...state,
      selectedItem: book,
      itemCallState: LoadingState.LOADED
    }),
  ),
  on(booksAction.actionGetBookFail, (state, {error}) => ({
      ...state,
      itemCallState: {errorMsg: error}
    }),
  ),
)

export function booksReducer(state: BooksState | undefined, action: Action) {
  return reducer(state, action);
}
