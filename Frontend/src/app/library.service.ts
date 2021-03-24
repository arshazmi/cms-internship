import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BlogModel} from './blog.model'
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  readonly baseurl='http://localhost:3000';
  constructor(private http:HttpClient) { }
  
  getBlogs(){
    return this.http.get(this.baseurl)
  }
  getBlog(_id:string){
    return this.http.get(this.baseurl+`/blogs/${_id}`)
  }
  newBlog(item:BlogModel,file:File){
    
    const formdata=new FormData();
    formdata.append('img',file);
    formdata.append('title',item.title);
    formdata.append('author',item.author);
    formdata.append('genre',item.genre);
    formdata.append('details',item.details);
    formdata.append('link',item.link);
    return this.http.post(this.baseurl+`/addblog`,formdata)
    .subscribe(data=>{console.log(data)})
  }
  deleteBlog(_id:string){
    return this.http.delete(this.baseurl+`/blogs/deleteblog/${_id}`)
  }
  editBlog(_id:string,item:BlogModel,file:File){
    const formdata=new FormData();
    formdata.append('img',file);
    formdata.append('title',item.title);
    formdata.append('author',item.author);
    formdata.append('genre',item.genre);
    formdata.append('details',item.details);
    formdata.append('link',item.link);
    return this.http.put(this.baseurl+`/blogs/editblog/${_id}`,formdata)
    .subscribe((data)=>{
      console.log(data);
    })
  }
  
  newUser(item:UserModel){
    return this.http.post(this.baseurl+`/adduser`,{"user":item})
    .subscribe(data=>{console.log(data)})
  }
  getAdmins(){
    return this.http.get(this.baseurl)
  }
  
  deleteAdmin(_id:string){
    return this.http.delete(this.baseurl+`/admins/deleteadmin/${_id}`)
  }
  
  newAdmin(item:UserModel){
    return this.http.post(this.baseurl+`/addadmin`,{"user":item})
    .subscribe(data=>{console.log(data)})
  }
  
  validateUser(user:any){
    return this.http.post<any>(this.baseurl+`/validateuser`,{"user":user})
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  adminlogg(){
    return !!localStorage.getItem('admin')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
