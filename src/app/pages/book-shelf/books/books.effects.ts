import {Injectable} from "@angular/core";

import {of} from "rxjs";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {
  actionAddBook, actionAddBookFail, actionAddBookSuccess,
  actionAllBooksFail,
  actionAllBooksSuccess, actionDeleteBook,
  actionDeleteBookFail,
  actionDeleteBookSuccess,
  actionGetBooks
} from "./books.actions";

import {BooksService} from "../../../shared/services/books/books.service";
import {Book, getBookRequestBody} from "./books.model";
import {Router} from "@angular/router";
import {NotificationService} from "../../../core/notifications/notification.service";


@Injectable()
export class BooksEffects {

  fetchBooks = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionGetBooks),
        switchMap(() => {
          return this.booksService.getAll().pipe(
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

  addBook = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionAddBook),
        switchMap(({book}) => {
          return this.booksService.addBook(getBookRequestBody(book)).pipe(
            tap(() => this.router.navigate(['/books'])),
            tap(() => this.notificationService.success('Book created successfully')),
            mergeMap((returnedBook: Book) => [
              actionAddBookSuccess({book: (returnedBook)})]),
            catchError(error => of(actionAddBookFail({error})))
          );
        })
      )
  );

  constructor(private actions$: Actions, private booksService: BooksService, private router: Router, private notificationService:NotificationService) {
  }
}
