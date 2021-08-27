import {Action, createReducer, on} from "@ngrx/store";

import {NavigationHistoryState} from "./navigation-history.model";
import {actionStoreNavigation} from "./navigation-history.actions";



export const initialState: NavigationHistoryState = {
  items: []
}


const reducer = createReducer(
  initialState,
  on(actionStoreNavigation, (state, {navigationItem}) => ({
      ...state,
      items: [...state.items, navigationItem]
    }),
  ),
)

export function NavigationHistoryReducer(state: NavigationHistoryState | undefined, action: Action) {
  return reducer(state, action);
}
