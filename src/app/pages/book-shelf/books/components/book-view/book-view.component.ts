import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";


import {actionGetBook} from "../../books.actions";
import {
  selectGetBook,
  selectGetBookState,
} from "../../books.selector";
import {Observable} from "rxjs";
import {Book} from "../../books.model";
import {CallState, LoadingStateObject} from "../../../../../shared/models/call-state.model";
import {State} from "../../../../../core/core.state";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {

  bookId: string;
  loadingState = LoadingStateObject;

  book$: Observable<Book | null>;
  getBookState$: Observable<CallState>

  constructor(private store: Store<State>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id') as string;
    this.store.dispatch(actionGetBook({id: this.bookId}));

    this.book$ = this.store.pipe(select(selectGetBook));
    this.getBookState$ = this.store.pipe(select(selectGetBookState));
  }

}
