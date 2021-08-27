import {createAction, props} from "@ngrx/store";

import {NavigationHistoryItem} from "./navigation-history.model";


export const actionStoreNavigation = createAction(
  '[History] Store Navigation Item',
    props<{navigationItem: NavigationHistoryItem}>()
);
