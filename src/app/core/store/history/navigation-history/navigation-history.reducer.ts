import {Action, createReducer, on} from "@ngrx/store";

import {NavigationHistoryState} from "./navigation-history.model";
import {actionStoreNavigation} from "./navigation-history.actions";
import {NAVIGATION_HISTORY_ITEMS_LIMIT} from "../../../../shared/consts/limits.const";



export const initialState: NavigationHistoryState = {
  items: []
}


const reducer = createReducer(
  initialState,
  on(actionStoreNavigation, (state, {navigationItem}) => ({
      ...state,
      items: [...state.items.slice(-(NAVIGATION_HISTORY_ITEMS_LIMIT - 1)), navigationItem]
    }),
  ),
)

export function NavigationHistoryReducer(state: NavigationHistoryState | undefined, action: Action) {
  return reducer(state, action);
}
