import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BooksContainerComponent} from "./books/components/books-container.component";
import {BookFormComponent} from "../forms/book-form/components/book-form.component";
import {BookViewComponent} from "./books/components/book-view/book-view.component";


const routes: Routes = [
  {
    path: '',
    component: BooksContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: BookFormComponent,
  },
  {
    path: ':id',
    component: BookViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookShelfRoutingModule {
}
