import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TokenInterceptorService} from './token-interceptor.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './addblog/addblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdminboardComponent } from './adminboard/adminboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    BlogsComponent,
    BlogComponent,
    AddblogComponent,
    EditblogComponent,
    AddadminComponent,
    AddcategoryComponent,
    AdminboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule
   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
