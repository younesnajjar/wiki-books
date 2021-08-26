import {Action, createReducer, on} from "@ngrx/store";

import {Form, FormState} from "./form.model";
import * as formActions from "./form.actions";

export const initialState: FormState = {
  form: {} as Form,
  bookExists: false,
}


const reducer = createReducer(
  initialState,
  on(formActions.actionFormUpdate, (state, {form}) => ({...state, form})),
  on(formActions.actionFormReset, () => (initialState)),
  on(formActions.actionBookExistence, (state, {bookExistence}) => ({...state, bookExists: bookExistence})),
)

export function formReducer(state: FormState | undefined, action: Action) {
  return reducer(state, action);
}
