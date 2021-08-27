import {createSelector} from "@ngrx/store";

import {selectAuthorsSpace} from "../authors-space.state";


export const selectAuthorsState = createSelector(
  selectAuthorsSpace,
  (state) => state.authors
);
export const selectAuthors = createSelector(
  selectAuthorsState,
  (state) => state.items
);

export const selectAuthor = createSelector(
  selectAuthorsState,
  (state) => state.selectedItem
);
export const selectAuthorCallState = createSelector(
  selectAuthorsState,
  (state) => state.itemCallState
);

export const selectAuthorBooks = createSelector(
  selectAuthorsState,
  (state) => state.itemBooks
);
export const selectAuthorBooksCallState = createSelector(
  selectAuthorsState,
  (state) => state.itemBooksCallState
);
