import {createSelector} from "@ngrx/store";

import {selectBookShelf} from "../book-shelf.state";


export const selectBooksState = createSelector(
  selectBookShelf,
  (state) => state.books
)
export const selectBooks = createSelector(
  selectBooksState,
  (state) => state.items
)
