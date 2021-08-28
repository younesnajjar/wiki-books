import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";


import {AuthorsState} from "./authors/authors.model";
import {authorsReducer} from "./authors/authors.reducer";
import {State} from "../../core/core.state";

export const AUTHORS_SPACE_FEATURE_NAME = 'authorsSpace';
export const selectAuthorsSpace =
  createFeatureSelector<State, AuthorsSpaceState>(AUTHORS_SPACE_FEATURE_NAME);
export const authorsSpaceReducers: ActionReducerMap<AuthorsSpaceState> = {
  authors: authorsReducer
};

export interface AuthorsSpaceState {
  authors: AuthorsState
}

