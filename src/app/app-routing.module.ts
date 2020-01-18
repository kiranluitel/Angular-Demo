import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardServiceService } from './service/route-guard-service.service';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardServiceService]},
  {path:'todos',component:ListTodosComponent, canActivate:[RouteGuardServiceService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardServiceService]},
  {path:'todos/:id',component:TodoComponent,canActivate:[RouteGuardServiceService]},
  {path:'**',component:ErrorComponent,canActivate:[RouteGuardServiceService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
