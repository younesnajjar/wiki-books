import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {debounceTime, take} from "rxjs/operators";

import {State} from "../../../book-shelf/book-shelf.state";
import {actionFormReset, actionFormUpdate, actionGetBookExistence} from "../form.actions";
import {selectBookExistence, selectFormState} from "../form.selectors";
import {Form} from "../form.model";
import {actionAddBook} from "../../../book-shelf/books/books.actions";
import {selectBookOnCreation} from "../../../book-shelf/books/books.selector";
import {actionAllAuthors} from "../../../authors-space/authors/authors.actions";
import {Author} from "../../../authors-space/authors/authors.model";
import {selectAuthors} from "../../../authors-space/authors/authors.selector";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent implements OnInit, OnDestroy {


  authors$: Observable<Author[]>;
  formValueChanges$: Observable<Form> | undefined;
  bookOnCreation$: Observable<boolean>;
  bookExistence$: Observable<boolean>;

  private setFormSubscription: Subscription;

  form = this.fb.group({
    id: ['', [Validators.required]],
    title: ['', [Validators.required]],
    author: [undefined, [Validators.required, Validators.minLength(7)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    rating: [0, [Validators.required]]
  });


  constructor(private fb: FormBuilder, private store: Store<State>) {
  }

  ngOnInit(): void {
    this.authors$ = this.store.pipe(select(selectAuthors));
    this.bookOnCreation$ = this.store.pipe(select(selectBookOnCreation));
    this.bookExistence$ = this.store.pipe(select(selectBookExistence));

    this.formValueChanges$ = this.form.valueChanges.pipe(debounceTime(500));

    this.setFormSubscription = this.store.pipe(select(selectFormState), take(1))
      .subscribe((form) => setTimeout(() => this.form.patchValue(form.form), 0));

    this.store.dispatch(actionAllAuthors());
  }

  update(form: Form) {
    this.store.dispatch(actionFormUpdate({form}));
    return null;
  }

  submit() {
    this.store.dispatch(actionAddBook({book: this.form.value}));
  }

  checkExistence($event: Event) {
    if (($event.target as any).value) {
      this.store.dispatch(actionGetBookExistence({id: ($event.target as any).value}));
    }
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
    this.store.dispatch(actionFormReset());
  }

  ngOnDestroy() {
    if (this.setFormSubscription) {
      this.setFormSubscription.unsubscribe();
    }
  }
}
