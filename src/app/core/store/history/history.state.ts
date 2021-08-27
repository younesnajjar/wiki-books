import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

import {NavigationHistoryState} from "./navigation-history/navigation-history.model";
import {State} from "../../../pages/book-shelf/book-shelf.state";
import {NavigationHistoryReducer} from "./navigation-history/navigation-history.reducer";



export const HISTORY_FEATURE_NAME = 'history';
export const selectHistory =
  createFeatureSelector<State, HistoryState>(HISTORY_FEATURE_NAME);
export const historyReducers: ActionReducerMap<HistoryState> = {
  navigationHistory: NavigationHistoryReducer
};
export interface HistoryState {
  navigationHistory: NavigationHistoryState
}
