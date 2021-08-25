import {selectBookShelf} from "../book-shelf.state";
import {createSelector} from "@ngrx/store";


export const selectFormState = createSelector(
  selectBookShelf,
  (state) => state.form
);

export const selectBookExistence = createSelector(
  selectFormState,
  (state) => state.bookExists
)
