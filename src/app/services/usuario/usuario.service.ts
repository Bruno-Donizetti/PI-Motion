import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario{
  id?:string;
  usuario:string
  cpf:string;
  senha:string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  apiUrl:string = "http://localhost:3000/usuarios";
  
  getUsuarios():Observable<Usuario>{
    return this.http.get<Usuario>(this.apiUrl);
  }

  usuarioExiste(usuario:string):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl + `?usuario=${usuario}`)
  }

  cadastrar(user: Usuario){
    // passar o subscribe para o tela cadastro component
    return this.http.post<Usuario>(this.apiUrl, user).subscribe({
      next: () => {
        window.alert("Usuario cadastrado!");
      }
    });
  }

  getUsuario(usuario:string):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl + `?usuario=${usuario}`)
  }
  
}
