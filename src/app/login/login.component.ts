import { Component, OnInit } from '@angular/core';
import { usersignup } from '../to-do-model';
import { ToDoService } from '../to-do.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'

import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean=false
  login = new usersignup('','')
  constructor(
    private service:ToDoService, 
    private router:Router
    ) 
  { }
  flag:number=0
email:string
  ngOnInit(): void {
  }
logins(loginsForm:NgForm){
  this.email=this.login.email
  this.service.user_login(this.login).subscribe(
    data=>{
    localStorage.setItem('token',data.access)
    console.log(this.login.email  )
    this.router.navigate(['to-do-list',this.email])
    
    
   
  },
    err=>{
      this.alert=true
    loginsForm.resetForm()
    }
    
    
  )
  }
}
