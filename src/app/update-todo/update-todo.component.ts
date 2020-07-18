import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { ToDoService } from '../to-do.service';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import {ToDoModel} from '../to-do-model'
export interface datas{
  task_id:number
}
@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})

export class UpdateTodoComponent implements OnInit {
  taskmodel=new ToDoModel('',false,'','')
  constructor(private task:ToDoService,private dialogref:MatDialogRef<UpdateTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:datas,
    ) { }

  ngOnInit(): void {
    
  }
  id:number;
  onClose(){
    this.dialogref.close()
    
  }
updateTask(){
  this.id=this.data.task_id
  
  this.task.updatetable(this.id,{task:this.taskmodel.task}).subscribe(m=>{
    console.log(m)
    this.task.filter('')
    this.onClose()
  })
}
}
