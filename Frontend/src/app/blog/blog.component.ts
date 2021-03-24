import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { BlogModel } from '../blog.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title:string|undefined='';
  blog:any;
  id:string='';
  constructor(public libraryService:LibraryService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number 
      this.getSingleblog(this.id);     
    });
  }
  getSingleblog(id:string){
    this.libraryService.getBlog(id)
    .subscribe((data)=>{
      this.blog= JSON.parse(JSON.stringify(data));
  })
  }
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.router.navigate(['/'])
  }


}
