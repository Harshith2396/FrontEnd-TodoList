import { Component, OnInit } from '@angular/core';
import{ToDoModel} from '../to-do-model'
import {ToDoService} from '../to-do.service'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router'
import {MatDialog,MatDialogConfig} from '@angular/material/dialog/'
import {DataFormComponent} from '../data-form/data-form.component'
const dats:ToDoModel[]=[
{task:'desc',task_id:'Lop',email:'lop',status:false}
]

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private matdialog:MatDialog,
    private route:ActivatedRoute,
    private router:Router
    ) {
   
  }
  email:string=''
  ngOnInit() {
  }
  AddTask(){
    this.email=this.route.snapshot.params.email
    this.matdialog.open(DataFormComponent,{disableClose:true,width:'70%',autoFocus:true,data:{email:this.email}})
  }
  logout(){
    localStorage.removeItem("token")
    this.router.navigate(['login'])

  }
}
