import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookManageComponent } from './book-manage/book-manage.component';
import { BooksreadonlyComponent } from './booksreadonly/booksreadonly.component';
import { BookbrowserComponent } from './bookbrowser/bookbrowser.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book', component: BooksComponent },
  { path: 'book-ro', component: BooksreadonlyComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'book/detail/:id', component: BookManageComponent },
  { path: 'book-ro/detail/:id', component: BookbrowserComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
}
