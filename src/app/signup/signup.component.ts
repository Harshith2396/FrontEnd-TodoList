import { Component, OnInit } from '@angular/core';
import {usersignup} from '../to-do-model'
import { NgForm } from '@angular/forms';
import { ToDoService } from '../to-do.service';
import { Router } from '@angular/router';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user=new usersignup('','')
  result:string=''
  constructor(private service:ToDoService, private route:Router,private dialog:MatDialog) { }
  alerts:boolean= false
  alertf:boolean=false
  alrt_msg:string=''
  ngOnInit(): void {
  }
  sign(event:NgForm)
  {

    this.service.user_signup(this.user).subscribe(data=>this.result=data.msg)  
    console.log(this.result)
    if (this.result=='created user'){
        
        this.alerts=true
        this.alertf=false
        this.alrt_msg='You have seccessfully signed Up'
        event.resetForm()
    }
    else
    { this.alertf=true
      this.alerts=false
      this.alrt_msg='User already exists'
      event.resetForm()
    }
    
}
loginpage(){
  this.route.navigate(['login'])
}
}
