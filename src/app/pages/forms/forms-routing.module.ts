import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookFormComponent} from "./book-form/components/book-form.component";

const routes: Routes = [
  {
    path: '',
    component: BookFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
