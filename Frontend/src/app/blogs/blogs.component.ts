import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BlogModel } from '../blog.model';
import { LibraryService } from '../library.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  i:number=0
  blogs:BlogModel[]|any;
  constructor(public libraryService:LibraryService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.libraryService.getBlogs().subscribe((data)=>{
      this.blogs= JSON.parse(JSON.stringify(data));
      
  })
}
getBlogfn(item:BlogModel){
  this.router.navigate([`blogs/${item._id}`]);
}
deleteBlogfn(item:BlogModel){
  if(confirm("Are you sure you want to delete")){
  for(this.i=0;this.i<this.blogs.length;this.i++){
    if(item._id==this.blogs[this.i]._id){
      this.blogs.splice(this.i,1);
    }
  }
  this.libraryService.deleteBlog(item._id).subscribe(()=>{
  })
  this.router.navigate(['blogs']);
}
else{
  this.router.navigate(['blogs']);
}
}
editBlogfn(item:BlogModel){
  this.router.navigate([`/editblog/${item._id}`]);
}
logoutUser(){
  localStorage.removeItem('token');
  localStorage.removeItem('admin');
  this.router.navigate(['/'])
}
}
