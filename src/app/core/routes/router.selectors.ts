import {getSelectors, RouterReducerState} from '@ngrx/router-store';
import {createFeatureSelector} from "@ngrx/store";
export const getRouterState = createFeatureSelector<RouterReducerState>('router');

export const {
  selectRouteParams, // select the current route params
  selectUrl, // select the current url
} = getSelectors(getRouterState);
