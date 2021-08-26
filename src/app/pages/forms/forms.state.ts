import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";


import {FormState} from "./book-form/form.model";
import {formReducer} from "./book-form/form.reducer";
import {State} from "../book-shelf/book-shelf.state";

export const FORMS_FEATURE_NAME = 'forms';
export const selectForms =
  createFeatureSelector<State, FormsState>(FORMS_FEATURE_NAME);
export const formsReducer: ActionReducerMap<FormsState> = {
  form: formReducer
};

export interface FormsState {
  form: FormState
}

