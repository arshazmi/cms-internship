import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddblogComponent } from './addblog/addblog.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EditblogComponent } from './editblog/editblog.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';

const routes: Routes = [{path:'', component:IndexComponent},
{path:'blogs',canActivate:[AuthGuard], component:BlogsComponent},
{path:'blogs/:id', component:BlogComponent},
{path:'addblog',canActivate:[AuthGuard],component:AddblogComponent},
{path:'editblog/:id',canActivate:[AuthGuard], component:EditblogComponent},
{path:'addadmin',canActivate:[AuthGuard],component:AddadminComponent},
{path:'adminboard',canActivate:[AuthGuard],component:AdminboardComponent},
{path:'addcategory',canActivate:[AuthGuard],component:AddcategoryComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
