import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ToDoModel, usersignup} from'./to-do-model'
import { Observable } from 'rxjs';
import {Subject} from 'rxjs'
import { stringify } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  _url='http://127.0.0.1:8000/add_task/'
  constructor(private stud_http:HttpClient) { }
  posts(stud:ToDoModel,email:string):Observable<any>{
   // console.log(stud)
  return this.stud_http.post<any>('http://127.0.0.1:8000/add_task/'+email,stud)
  }

  updatetable(id:number,data:any):Observable <any>{
    return this.stud_http.patch('http://127.0.0.1:8000/update-task/'+id,data)
  }


  pullData(email:string):Observable<any>{
    //console.log('pull data func'+email)
    return this.stud_http.get<any>('http://127.0.0.1:8000/all_tasks/'+email)
  }
  private _listeners=new Subject<any>();
  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy:string){
    this._listeners.next(filterBy)
  }
  deleteTask(ids:number):Observable<any>{
    //console.log(ids)
    
    //console.log('http://127.0.0.1:8000/delete-task/'+ids)
    return this.stud_http.delete('http://127.0.0.1:8000/delete-task/'+ids)
  }
  user_signup(user:usersignup):Observable<any>{
    return this.stud_http.post<any>('http://127.0.0.1:8000/user-add/',user)
  }
  user_login(user:usersignup):Observable <any>{
    return this.stud_http.post('http://127.0.0.1:8000/tokens/',user)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  incomp(id:number):Observable<any>{
    return this.stud_http.patch('http://127.0.0.1:8000/update-status/'+id,{status:true})
  }
  comp(id:number):Observable<any>{
    return this.stud_http.patch('http://127.0.0.1:8000/update-status/'+id,{status:false})
  }
  passwordReset(data:usersignup,email:string):Observable<any>{
    return this.stud_http.patch('http://127.0.0.1:8000/change-password/'+email,data)
  }
  forgetPassword(data:usersignup):Observable<any>{
    return this.stud_http.post('http://127.0.0.1:8000/forget-password',data)
  }
}
