import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'', component:IndexComponent},
{path:'books',canActivate:[AuthGuard], component:BooksComponent},
{path:'books/:id', component:BookComponent},
{path:'addbook',canActivate:[AuthGuard],component:AddbookComponent},
{path:'editbook/:id',canActivate:[AuthGuard], component:EditbookComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
