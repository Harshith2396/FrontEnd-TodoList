import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { usersignup } from '../to-do-model';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  alert:boolean=false
  alert1:boolean=false
  alert2:boolean=false

  login = new usersignup('','')
  constructor(
    private service:ToDoService, 
  
    ) 
  { }
  flag:number=0
email:string
  ngOnInit(): void {
  }
logins(loginsForm:NgForm){
  
  this.service.forgetPassword(this.login).subscribe(
    data=>{
      console.log(data)
    if (data.msg=='success')
    {this.alert1=true
      this.alert=false
      this.alert2=false
      
    }
    else if (data.msg=='error1')
    {this.alert1=false
      this.alert=false
      this.alert2=true

    }
    else
    {this.alert=true
      this.alert1=false
    }
    loginsForm.resetForm()
  },
    err=>{
      console.log(err)
      this.alert=true
      this.alert1=false
      this.alert2=false
    loginsForm.resetForm()
    }
    
    
  )
  }

}
