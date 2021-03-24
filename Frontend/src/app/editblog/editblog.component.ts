import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';
import {BlogModel} from '../blog.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  id:string='';
  selectedFile=null;
  editForm:FormGroup;
  constructor( public libraryService:LibraryService,private router:Router,private route:ActivatedRoute,private formBuilder:FormBuilder) { }
  blogItem=new BlogModel('','','',null,'','','')
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number    
      this.libraryService.getBlog(this.id)
      .subscribe((data)=>{
        this.blogItem= JSON.parse(JSON.stringify(data));
    }) 
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,})[/\\w .-]*/?';
    this.editForm =this.formBuilder.group({
      'title':[this.blogItem.title,[Validators.required]],
      'author':[this.blogItem.author,[Validators.required]],
      'genre':[this.blogItem.genre,[Validators.required]],
      'details':[this.blogItem.details,[Validators.required]],
      'link':[this.blogItem.link,[Validators.required]],
      'img':[this.blogItem.img,[Validators.required]],
    })   
    });

  }
  upload(event){
    this.selectedFile=event.target.files[0]

  }
  EditBlogfn(){
    this.libraryService.editBlog(this.id,this.blogItem,this.selectedFile);
    alert("successfully edited");
    this.router.navigate(['/blogs']);
  }
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.router.navigate(['/'])
  }
}
