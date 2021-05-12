import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegestrationComponent } from './regestration/regestration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    component:RegestrationComponent 
  },
  {
    path:'regestration',
    component:RegestrationComponent
  },
  
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegestrationComponent,LoginComponent]
