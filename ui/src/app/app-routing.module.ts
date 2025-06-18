import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './default/nav/nav.component';
import { DarshComponent } from './pages/darsh/darsh.component';


const routes: Routes = [
   
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
{path:'home',component:NavComponent,children:[
  {path:'',redirectTo:"home",pathMatch:"full"},
    {path:'',component:DarshComponent},


  
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
