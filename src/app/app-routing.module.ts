import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./pages/books/books.module').then((m) => m.BooksModule),
    pathMatch: 'full'
  },
  {
    path: 'books/form',
    loadChildren: () =>
      import('./pages/form/form.module').then((m) => m.FormModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
