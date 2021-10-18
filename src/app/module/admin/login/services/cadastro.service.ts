import { environment } from './../../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Cadastro } from '../cadastro/cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

constructor( private MatSnackBar: MatSnackBar, private http: HttpClient) { }

showMessage(msg:string){
  this.MatSnackBar.open(msg,'x',{
    duration:3000,
    horizontalPosition:'right',
    verticalPosition:'top'
  })
}
 errorMessage(msg:string){
   this.MatSnackBar.open(msg,'x',{
     duration:3000,
     horizontalPosition:'right',
     verticalPosition:'top'
   })
 }

createCadastro(cadastro: Cadastro): Observable<Cadastro>{
  return this.http.post<Cadastro>(`${environment.API_URL}`,cadastro);
}

 validandoCadastro(){
   return this.http.get(`${environment.API_URL}`);
 }

}

