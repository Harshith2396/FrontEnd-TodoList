import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';
import { MatDialog } from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  stats="status"
  desc="Task Description"
  opt="Options"
  error:boolean=false
  dataSource=[]
  email:string=''
  displayedColumns: string[]=['stats','task','options']
  constructor( private _task:ToDoService,
    private route:ActivatedRoute,
    private matdialog:MatDialog)
     { 
    this._task.listen().subscribe((m:any )=>{
      
      this.table()
    })
  }

  ngOnInit(): void {
    this.email=this.route.snapshot.params.email
    this.table()
    
  }
  table(){
    
    this._task.pullData(this.email).subscribe(
      data=>{
        
        if (data.status==200){
          this.error=true
          
        }
        else{
          this.dataSource=data
        }
      },
      err=>{
        this.error=true
      }
      
      )
    }
  deletetask(id:number){
    if (confirm("Do you really want to delete this task?")){
      this._task.deleteTask(id).subscribe(data=>{console.log(data)
      this.table()})
    }
  }
  update(task_id:number){
this.matdialog.open(UpdateTodoComponent,{width:'70%',autoFocus:true,disableClose:true,data:{task_id:task_id}})
  }
  Incomplete(task_id:number){
    this._task.incomp(task_id).subscribe(data=>{console.log(data)
    this.table()
    },
    err=>{})
  }
  Complete(task_id:number){
    this._task.comp(task_id).subscribe(data=>{console.log(data)
    this.table()
    },
    err=>{})
  }
}
