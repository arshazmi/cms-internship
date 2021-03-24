import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogModel } from '../blog.model';
import { LibraryService } from '../library.service';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
 addForm:FormGroup;
  selectedFile=null;
  constructor(public libraryService:LibraryService,private router:Router,private formBuilder:FormBuilder) { }
  blogItem=new BlogModel('','','',null,'','','');
  ngOnInit(): void {
    // const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,})[/\\w .-]*/?';
    this.addForm =this.formBuilder.group({
      'title':[this.blogItem.title,[Validators.required]],
      'author':[this.blogItem.author,[Validators.required]],
      'genre':[this.blogItem.genre,[Validators.required]],
      'details':[this.blogItem.details,[Validators.required]],
      'link':[this.blogItem.link,[Validators.required]],
      'img':[this.blogItem.img,[Validators.required]],
    })
  }
  upload(event){
    this.selectedFile=event.target.files[0]

  }
  addBlog(){
    
    this.libraryService.newBlog(this.blogItem,this.selectedFile);
    alert("successfully added");
    this.router.navigate(['/blogs']);
  }
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }
}
