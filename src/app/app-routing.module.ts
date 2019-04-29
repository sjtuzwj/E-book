import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookManageComponent } from './book-manage/book-manage.component';
import { BooksreadonlyComponent } from './booksreadonly/booksreadonly.component';
import { BookbrowserComponent } from './bookbrowser/bookbrowser.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { OrdermanagementComponent } from './ordermanagement/ordermanagement.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import {StatisticsComponent} from './statistics/statistics.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book', component: BooksComponent },
  { path: 'book-ro', component: BooksreadonlyComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'book/detail/:id', component: BookManageComponent },
  { path: 'book-ro/detail/:id', component: BookbrowserComponent },
  { path: 'ordermanagement', component: OrdermanagementComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'usermanagement', component:  UsermanagementComponent},
  { path: 'cart', component:  CartComponent},
  { path: 'statistics', component:  StatisticsComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
}
