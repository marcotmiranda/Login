import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';
import { Cadastro } from './cadastro.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Cadastro = {
    nome:'',
    senha: null
  }

  loginForm: any = FormGroup
  mostraSpin:boolean = false
  messagem:boolean = false
  page:boolean = true

  constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroService) { }

  ngOnInit() {
    this.login()
  }

  login(){
  this.loginForm = this.fb.group({
    nome:['',Validators.required],
    senha:['',Validators.required],
    confirmeSenha:['',Validators.required]
  });
  }

  createMessage(){
    this.cadastroService.createCadastro(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage('Cadastro realizado com sucesso')
    })
  }

  cancelar(){
    this.router.navigate(['/']);
  }

  addLogin(){
    const senha = this.loginForm.get('senha').value;
    const confirme = this.loginForm.get('confirmeSenha').value;
    if(this.loginForm.valid == true && senha === confirme){
      this.messagem = false
      this.page = true;
      this.mostraSpin = true
      setTimeout(()=> {
         this.createMessage()
         this.router.navigate(['/']);
       },3000);
    }else{
      return this.messagem = true
    }
  }

}
