import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { TableDataComponent } from './table-data/table-data.component';
import { DataFormComponent } from './data-form/data-form.component'
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component'
import {TokenInterceptorService} from './token-interceptor.service'
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ToDoListComponent,
    TableDataComponent,
    DataFormComponent,
    UpdateTodoComponent,
    ForgotpasswordComponent,
    PasswordresetComponent,
    SignupDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents:[DataFormComponent,UpdateTodoComponent]

})
export class AppModule { }
