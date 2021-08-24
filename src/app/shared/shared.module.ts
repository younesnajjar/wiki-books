import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BooksService} from "./services/books.service";

import { LoadableButtonComponent } from './components/loadable-button/loadable-button.component';

import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";



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
    RippleModule
  ],
  exports: [
    // angular
    FormsModule,


    // primeng
    TableModule,
    ButtonModule,
    RatingModule,
    CardModule,
    InputTextModule,
    RippleModule,
    LoadableButtonComponent
  ],
  providers: [
    BooksService
  ]
})
export class SharedModule { }
