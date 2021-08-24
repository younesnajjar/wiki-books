import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BooksContainerComponent} from "./books/components/books-container.component";
import {BookFormComponent} from "./books/components/book-form/book-form.component";

const routes: Routes = [
  {
    path: '',
    component: BooksContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: BookFormComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookShelfRoutingModule {
}
