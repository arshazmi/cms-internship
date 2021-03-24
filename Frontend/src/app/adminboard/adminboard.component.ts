import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserModel } from '../user.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  i:number=0
  users:UserModel[]|any;
  constructor(public libraryService:LibraryService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.libraryService.getAdmins().subscribe((data)=>{
      this.users= JSON.parse(JSON.stringify(data));
      
  })
}

deleteUserfn(item:UserModel){
  if(confirm("Are you sure you want to delete")){
  for(this.i=0;this.i<this.users.length;this.i++){
    if(item._id==this.users[this.i]._id){
      this.users.splice(this.i,1);
    }
  }
  this.libraryService.deleteAdmin(item._id).subscribe(()=>{
  })
  this.router.navigate(['adminboard']);
}
else{
  this.router.navigate(['adminboard']);
}
}
editAdminfn(item:UserModel){
  this.router.navigate([`/editadmin/${item._id}`]);
}
logoutUser(){
  localStorage.removeItem('token');
  localStorage.removeItem('admin');
  this.router.navigate(['/'])
}
}
