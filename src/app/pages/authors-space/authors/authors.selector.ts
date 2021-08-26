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
