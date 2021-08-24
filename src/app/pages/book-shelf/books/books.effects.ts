import {Injectable} from "@angular/core";

import {of} from "rxjs";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {
  actionAllBooksFail,
  actionAllBooksSuccess, actionDeleteBook,
  actionDeleteBookFail,
  actionDeleteBookSuccess,
  actionGetBooks
} from "./books.actions";

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
  );
  deleteBook = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionDeleteBook),
        mergeMap(({book}) => {
          return this.booksService.deleteBook(book).pipe(
            map(() => actionDeleteBookSuccess({id: book.id})),
            catchError(error => of(actionDeleteBookFail({error: error, id: book.id})))
          );
        })
      )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {
  }
}
