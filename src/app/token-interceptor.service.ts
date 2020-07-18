import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { ToDoService } from './to-do.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) { }
  intercept(req,nxt){
    let tok
    let auth=this.inject.get(ToDoService)
    if (auth.getToken()){
      //without  this 'if loop' the header will have the token field and send empty values which 
      //causes the backend django to throw a 401 unauthorised error
      //it is important that the authenticationmust be used only at specified places
    tok=req.clone({
      setHeaders:{
        AUTHORIZATION:`Bearer ${auth.getToken()}`
      }
    })}
    else {tok=req}
    return nxt.handle(tok)
  }
}
