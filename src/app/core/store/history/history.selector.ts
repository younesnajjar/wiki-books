import {createSelector} from "@ngrx/store";

import {selectHistory} from "./history.state";

export const selectNavigationHistory = createSelector(
  selectHistory,
  (state) => state.navigationHistory
);

export const selectNavigationHistoryList = createSelector(
  selectNavigationHistory,
  (state) => state.items
)
