import { Component, OnInit, Inject } from '@angular/core';
import { ToDoService } from '../to-do.service';
import {ActivatedRoute} from '@angular/router'
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import {ToDoListComponent} from '../to-do-list/to-do-list.component'
import { ToDoModel } from '../to-do-model';
import { NgForm } from '@angular/forms';
export interface Data{
  email:string
}
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  taskmodel=new ToDoModel('',false,'','')
  email:string=''
  error:boolean=false;
  
  constructor(private _task:ToDoService,
    private route:ActivatedRoute,
    private dialog:MatDialogRef<ToDoListComponent>, 
    @Inject(MAT_DIALOG_DATA) public datas:Data
    ) { }
    
  ngOnInit(): void {
    this.email=this.datas.email

  }
  close(){
    this.dialog.close()
    this._task.filter("register click")
  }
  addTask(event:NgForm){

    this.taskmodel.email=this.email
    this._task.posts(this.taskmodel,this.email).subscribe(
      data=>{
        if (data.error=='Error'){
            this.error=true
            event.resetForm()
        }
        else{
          event.resetForm()
        }
      },
      err=>{})
    
  
   }
}
