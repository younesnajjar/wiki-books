import {createSelector} from "@ngrx/store";
import {selectForms} from "../forms.state";


export const selectFormState = createSelector(
  selectForms,
  (state) => state.form
);

export const selectBookExistence = createSelector(
  selectFormState,
  (state) => state.bookExists
)
