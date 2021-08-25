import {Injectable} from "@angular/core";

import {of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {actionAllAuthorsFail, actionAllAuthorsSuccess, actionAllAuthors} from "./authors.actions";

import {AuthorsService} from "../../../shared/services/authors/authors.service";


@Injectable()
export class AuthorsEffects {

  fetchBooks = createEffect(
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

  constructor(private actions$: Actions, private authorsService: AuthorsService) {
  }
}
