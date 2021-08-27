import {createSelector} from "@ngrx/store";

import {selectBookShelf} from "../book-shelf.state";


export const selectBooksState = createSelector(
  selectBookShelf,
  (state) => state.books
);

export const selectBooks = createSelector(
  selectBooksState,
  (state) => state.items
);

export const selectGetBooksState = createSelector(
  selectBooksState,
  (state) => state.callState
);

export const selectOnDeleteBooks = createSelector(
  selectBooksState,
  (state) => state.onDeleteItems
);

export const selectBookOnCreation = createSelector(
  selectBooksState,
  (state) => state.bookOnCreation
);

export const selectGetBook = createSelector(
  selectBooksState,
  (state) => state.selectedItem
)
export const selectGetBookState = createSelector(
  selectBooksState,
  (state) => state.itemCallState
)
