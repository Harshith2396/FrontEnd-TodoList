import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {PasswordresetComponent} from './passwordreset/passwordreset.component'
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component'


const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'to-do-list/:email',component:ToDoListComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotpasswordComponent}
  ,{path:'password-reset/:email/:token',component:PasswordresetComponent},
  {path:'**',redirectTo:'signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
