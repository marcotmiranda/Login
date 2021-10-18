import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin.routes';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './login/login/login.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    CadastroComponent,
  ]

})

export class AdminModule { }
