import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorComponent} from "./authors/components/author/author.component";

const routes: Routes = [
  {
    path: ':id',
    component: AuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsSpaceRoutingModule { }
