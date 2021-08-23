import {Injectable} from "@angular/core";

import {of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {actionAllBooksFail, actionAllBooksSuccess, actionGetBooks} from "./books.actions";

import {BooksService} from "../../../shared/services/books.service";


@Injectable()
export class BooksEffects {

  fetchBooks = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionGetBooks),
        switchMap(() => {
          return this.booksService.getAllBooks().pipe(
            map((books) => actionAllBooksSuccess({books})),
            catchError(error => of(actionAllBooksFail({error: error})))
          );
        })
      )
  )

  constructor(private actions$: Actions, private booksService: BooksService) {
  }
}
