import { Component, OnInit } from '@angular/core';
import { userSchema } from '../../Models/userSchema';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  allUsers :userSchema[]=[]
  searchKey:string=""
  
  constructor(private api:ApiService, private toaster:ToastrService){}

 ngOnInit(): void {
   this.getAllUserList()
 }

  getAllUserList (){
    this.api.getAllUserAPI().subscribe({
      next:(result:any)=>{
        this.allUsers= result
        console.log(this.allUsers);
        
      },
      error:(reason:any)=>{
        console.log(reason);
      }
    })
  }

  deleteUser(id:any){
    this.api.removeUserAPI(id).subscribe(
      (res:any)=>{
        this.toaster.success("user removed")
        this.getAllUserList()
      }
    )
  }
}
