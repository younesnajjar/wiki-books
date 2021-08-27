import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

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
    path: 'books/form',
    loadChildren: () =>
      import('./pages/forms/forms.module').then((m) => m.FormsModule)
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./pages/authors-space/authors-space.module').then((m) => m.AuthorsSpaceModule)
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./pages/book-shelf/book-shelf.module').then((m) => m.BookShelfModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
