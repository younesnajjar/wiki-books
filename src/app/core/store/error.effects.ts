import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {NotificationService} from "../notifications/notification.service";
import {
  actionAddBookFail,
  actionAllBooksFail, actionDeleteBookFail,
  actionGetBookFail,
} from "../../pages/book-shelf/books/books.actions";
import {tap} from "rxjs/operators";
import {
  actionAllAuthorsFail,
  actionGetAuthorBooksFail,
  actionGetAuthorFail
} from "../../pages/authors-space/authors/authors.actions";


@Injectable()
export class BooksEffects {


  requestErrors = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionAllBooksFail,
          actionDeleteBookFail,
          actionAddBookFail,
          actionGetBookFail,
          actionAllAuthorsFail,
          actionGetAuthorFail,
          actionGetAuthorBooksFail,
          actionAddBookFail
        ),
        tap(() => {
          this.notificationService.error('Request Error', 'An error has occurred, please try again.')
        })
      ),{dispatch: false}
  );
  requestErrorForward = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          actionGetBookFail,
          actionAllAuthorsFail,
          actionGetAuthorFail,
        ),
        tap(() => {
          this.route.navigate(['/home']);
        })
      ),{dispatch: false}
  );

  constructor(private actions$: Actions, private notificationService: NotificationService, private route: Router) {
  }
}
