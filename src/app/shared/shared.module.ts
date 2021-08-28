import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksService} from "./services/books/books.service";

import {LoadableButtonComponent} from './components/loadable-button/loadable-button.component';

import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {AuthorsService} from "./services/authors/authors.service";


@NgModule({
  declarations: [
    LoadableButtonComponent
  ],
  imports: [
    // angular
    CommonModule,
    FormsModule,

    // primeng
    TableModule,
    ButtonModule,
    RatingModule,
    CardModule,
    InputTextModule,
    RippleModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,
  ],
  exports: [
    // angular
    FormsModule,
    ReactiveFormsModule,


    // primeng
    TableModule,
    ButtonModule,
    RatingModule,
    CardModule,
    InputTextModule,
    RippleModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule,


    LoadableButtonComponent,

  ],
  providers: [
    BooksService,
    AuthorsService
  ]
})
export class SharedModule {
}
