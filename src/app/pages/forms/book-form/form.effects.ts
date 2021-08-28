import {Injectable} from "@angular/core";

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";

import {actionBookExistence, actionGetBookExistence} from "./form.actions";
import {BooksService} from "../../../shared/services/books/books.service";


@Injectable()
export class FormEffects {

  /** @Note: Not implemented yet
   * Save to local storage for reload persistence **/


  checkIdAvailability = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionGetBookExistence),
        switchMap(({id}) => {
          return this.booksService.getOne(id, false).pipe(
            map((book) => actionBookExistence({bookExistence: true})),
            catchError(error => of(actionBookExistence({bookExistence: false})))
          )
        })
      )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {
  }
}
