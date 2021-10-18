import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = FormGroup
  conta:any
  valor;
  cadastro:any
  mostraSpin:boolean = false
  page:boolean = true

  constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroService) { }

  ngOnInit() {
    this.login()
  }

  login(){
  this.loginForm = this.fb.group({
    nome:['',Validators.required],
    senha:['',Validators.required]
  });
  }

 validacao(){
   this.cadastroService.validandoCadastro().subscribe((data) => {
       this.cadastro = data
        this.conta = this.cadastro.filter((item) =>{
         this.valor = item
       })
       if(this.loginForm.valid == true && this.valor.nome === this.loginForm.value['nome'] && this.valor.senha === this.loginForm.value['senha']){
         this.page = true;
         this.mostraSpin = true;
         setTimeout(()=> {
          this.router.navigate(['/header']);
         },3000);
       }else{
         return this.cadastroService.errorMessage('Usuario Não cadastrado')
       }
   })
 }

}
