import { Component, OnInit } from '@angular/core';
import { usersignup } from '../to-do-model';
import { ToDoService } from '../to-do.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})
export class PasswordresetComponent implements OnInit {
  alert:boolean=false
  alert1:boolean=false
  token:string=''
  login = new usersignup('','')
  constructor(
    private service:ToDoService, 
    private router:ActivatedRoute
    ) 
  { }
  flag:number=0
email:string
  ngOnInit(): void {
    this.token=this.router.snapshot.params.token
    localStorage.setItem('token',this.token)
    this.email=this.router.snapshot.params.email

  }
logins(loginsForm:NgForm){
  
  this.service.passwordReset(this.login,this.email).subscribe(
    data=>{
    if (data.msg=='success')
    {this.alert1=true
      this.alert=false
    }
    else
    {this.alert=true
      this.alert1=false
    }
    loginsForm.resetForm()
  },
    err=>{
      this.alert=true
      this.alert1=false
    loginsForm.resetForm()
    }
    
    
  )
  }
}
