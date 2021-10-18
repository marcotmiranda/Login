import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';



const adminRouterCoinfig: Routes = [
  { path:'', component: LoginComponent },
  {path:'cadastro', component: CadastroComponent },

]


@NgModule({
  imports:[
    RouterModule.forChild(adminRouterCoinfig)
  ],

  exports:[
    RouterModule,

  ]

})

export class AdminRoutingModule{}
