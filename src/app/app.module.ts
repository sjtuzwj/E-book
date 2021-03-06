import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookManageComponent } from './book-manage/book-manage.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
// 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
import {SaveFill, LeftCircleFill, ReloadOutline, PlusCircleFill, DeleteFill,
  DashboardOutline, BarsOutline, EditOutline, ShopOutline, UserOutline, ProfileOutline,
  LoginOutline, IdcardOutline, ShoppingCartOutline, IeOutline, QuestionCircleOutline , LockOutline,
  UnlockOutline} from '@ant-design/icons-angular/icons';
import { BooksreadonlyComponent } from './booksreadonly/booksreadonly.component';
import { BookbrowserComponent } from './bookbrowser/bookbrowser.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { OrdermanagementComponent } from './ordermanagement/ordermanagement.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { BookSearchLocalComponent } from './book-search-local/book-search-local.component';
import { NgxEchartsModule} from 'ngx-echarts';
import { StatisticsComponent } from './statistics/statistics.component';
import 'echarts-gl';
import { HeadComponent } from './head/head.component';

const icons: IconDefinition[] = [ SaveFill, LeftCircleFill, ReloadOutline, PlusCircleFill,
   DeleteFill, DashboardOutline, BarsOutline, EditOutline, ShopOutline, UserOutline, ProfileOutline,
   LoginOutline, IdcardOutline, ShoppingCartOutline, IeOutline, QuestionCircleOutline, LockOutline , UnlockOutline];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookManageComponent,
    MessagesComponent,
    DashboardComponent,
    BookSearchComponent,
    BooksreadonlyComponent,
    BookbrowserComponent,
    UsermanagementComponent,
    OrdermanagementComponent,
    SigninComponent,
    SignupComponent,
    CartComponent,
    BookSearchLocalComponent,
    StatisticsComponent,
    HeadComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
