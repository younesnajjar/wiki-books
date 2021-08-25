import {createSelector} from "@ngrx/store";

import {selectBookShelf} from "../book-shelf.state";


export const selectAuthorsState = createSelector(
  selectBookShelf,
  (state) => state.authors
);
export const selectAuthors = createSelector(
  selectAuthorsState,
  (state) => state.items
);
