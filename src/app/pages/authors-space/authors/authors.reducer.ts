import {Action, createReducer, on} from "@ngrx/store";

import {LoadingState} from "../../../shared/models/call-state.model";
import * as authorsActions from "./authors.actions";
import {Author, AuthorsState} from "./authors.model";

export const initialState: AuthorsState = {
  items: [],
  callState: LoadingState.INIT,
  selectedItem: {} as Author,
  itemCallState: LoadingState.INIT,
  itemBooks: [],
  itemBooksCallState: LoadingState.INIT
}


const reducer = createReducer(
  initialState,

  /***** @Get All Authors section *****/

  on(authorsActions.actionAllAuthors, (state) => ({
      ...state,
      callState: LoadingState.LOADING
    }),
  ),
  on(authorsActions.actionAllAuthorsSuccess, (state, {authors}) => ({
      ...state,
      items: authors,
      callState: LoadingState.LOADED
    }),
  ),
  on(authorsActions.actionAllAuthorsFail, (state, {error}) => ({
      ...state,
      callState: {errorMsg: error.errorMsg}
    }),
  ),

  /***** @Get Author section *****/

  on(authorsActions.actionGetAuthor, (state) => ({
      ...state,
      itemCallState: LoadingState.LOADING
    }),
  ),
  on(authorsActions.actionGetAuthorSuccess, (state, {author}) => ({
      ...state,
      selectedItem: author,
      itemCallState: LoadingState.LOADED
    }),
  ),
  on(authorsActions.actionGetAuthorFail, (state, {error}) => ({
      ...state,
      itemCallState: {errorMsg: error.errorMsg}
    }),
  ),

  /***** @Get Author Books section *****/

  on(authorsActions.actionGetAuthorBooks, (state) => ({
      ...state,
      itemBooksCallState: LoadingState.LOADING
    }),
  ),
  on(authorsActions.actionGetAuthorBooksSuccess, (state, {books}) => ({
      ...state,
      itemBooks: books,
      itemBooksCallState: LoadingState.LOADED
    }),
  ),
  on(authorsActions.actionGetAuthorBooksFail, (state, {error}) => ({
      ...state,
      itemBooksCallState: {errorMsg: error.errorMsg}
    }),
  )
)

export function authorsReducer(state: AuthorsState | undefined, action: Action) {
  return reducer(state, action);
}
