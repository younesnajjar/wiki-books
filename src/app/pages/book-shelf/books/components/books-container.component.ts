import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {Book} from "../books.model";
import {selectBooks, selectGetBooksState, selectOnDeleteBooks} from "../books.selector";
import {actionDeleteBook, actionGetBooks} from "../books.actions";
import {CallState, LoadingStateObject} from "../../../../shared/models/call-state.model";
import {State} from "../../../../core/core.state";

@Component({
  selector: 'app-books',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent implements OnInit {

  loadingState = LoadingStateObject;

  books$: Observable<Book[]>;
  onDeleteBooksIDs$: Observable<number[]>;
  getBooksState$: Observable<CallState>;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.books$ = this.store.pipe(select(selectBooks));
    this.onDeleteBooksIDs$ = this.store.pipe(select(selectOnDeleteBooks));
    this.getBooksState$ = this.store.pipe(select(selectGetBooksState));
    this.store.dispatch(actionGetBooks());
  }

  deleteBook(book: Book) {
    this.store.dispatch(actionDeleteBook({book}));
  }
}
