import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {BookShelfState, FEATURE_NAME, State} from "../../book-shelf.state";
import {Book, BooksState} from "../books.model";
import {Observable} from "rxjs";
import {selectBooks} from "../books.selector";
import {BooksService} from "../../../../shared/services/books.service";
import {actionGetBooks} from "../books.actions";

@Component({
  selector: 'app-books',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BooksContainerComponent implements OnInit {

  books$: Observable<Book[]> | undefined;

  constructor(private store: Store<State>, private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.books$ = this.store.pipe(select(selectBooks));
    this.store.dispatch(actionGetBooks());
    this.books$.subscribe(a => {console.log(a)});
  }

}
