import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogModel } from '../blog.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title:string ="VOICE UP";
  blogs:BlogModel[] | undefined;
  constructor(public libraryService:LibraryService, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
   this.libraryService.getBlogs().subscribe((data)=>{
     this.blogs= JSON.parse(JSON.stringify(data));
   })
  }
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.router.navigate(['/'])
  }

}
