import {Action, createReducer, on} from "@ngrx/store";

import {LoadingState} from "../../../shared/models/call-state.model";
import * as authorsActions from "./authors.actions";
import {AuthorsState} from "./authors.model";

export const initialState: AuthorsState = {
  items: [],
  callState: LoadingState.INIT
}


const reducer = createReducer(
  initialState,
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
  )
)

export function authorsReducer(state: AuthorsState | undefined, action: Action) {
  return reducer(state, action);
}
