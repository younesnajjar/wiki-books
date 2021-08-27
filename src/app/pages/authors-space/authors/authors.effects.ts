import {Injectable} from "@angular/core";

import {of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {
  actionAllAuthorsFail,
  actionAllAuthorsSuccess,
  actionAllAuthors,
  actionGetAuthor,
  actionGetAuthorSuccess,
  actionGetAuthorFail,
  actionGetAuthorBooks,
  actionGetAuthorBooksSuccess,
  actionGetAuthorBooksFail
} from "./authors.actions";

import {AuthorsService} from "../../../shared/services/authors/authors.service";


@Injectable()
export class AuthorsEffects {

  fetchAuthors = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionAllAuthors),
        switchMap(() => {
          return this.authorsService.getAll().pipe(
            map((authors) => actionAllAuthorsSuccess({authors})),
            catchError(error => of(actionAllAuthorsFail({error: error})))
          );
        })
      )
  );

  fetchAuthor = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionGetAuthor),
        switchMap(({id}) => {
          return this.authorsService.getOne(id).pipe(
            map((author) => actionGetAuthorSuccess({author})),
            catchError(error => of(actionGetAuthorFail({error: error})))
          );
        })
      )
  );

  fetchAuthorBooks = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionGetAuthorBooks),
        switchMap(({id}) => {
          return this.authorsService.getAuthorBooks(id).pipe(
            map((books) => actionGetAuthorBooksSuccess({books})),
            catchError(error => of(actionGetAuthorBooksFail({error: error})))
          );
        })
      )
  );

  constructor(private actions$: Actions, private authorsService: AuthorsService) {
  }
}
