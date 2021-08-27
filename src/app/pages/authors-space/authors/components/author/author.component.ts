import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../../../book-shelf/book-shelf.state";
import {Observable} from "rxjs";
import {Author} from "../../authors.model";
import {selectAuthor, selectAuthorBooks} from "../../authors.selector";
import {actionGetAuthor, actionGetAuthorBooks} from "../../authors.actions";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../../../book-shelf/books/books.model";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  authorId: string;

  author$: Observable<Author>
  authorBooks$: Observable<Book[]>
  constructor(private store: Store<State>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authorId = this.route.snapshot.paramMap.get('id') as string;
    this.store.dispatch(actionGetAuthor({id: this.authorId}));
    this.store.dispatch(actionGetAuthorBooks({id: this.authorId}));
    this.author$ = this.store.pipe(select(selectAuthor));
    this.authorBooks$ = this.store.pipe(select(selectAuthorBooks));
  }

}
