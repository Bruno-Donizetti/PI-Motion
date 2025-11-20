import { Component } from '@angular/core';
import { JanelaCadastroComponent } from "../janela/janela-cadastro/janela-cadastro.component";
import { InputComponent } from "../assets/input/input.component";
import { BotaoComponent } from "../assets/botao/botao.component";
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [JanelaCadastroComponent, InputComponent, BotaoComponent],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.scss'
})

export class TelaLoginComponent {
  usuario:string = "";
  senha:string = "";
  existe:boolean = false;

  constructor(private usuarioService:UsuarioService) {}

  setUsuario(event:string){
    this.usuario = event;
  }

  setSenha(event:string){
    this.senha = event;
  }

  login(){
    this.usuarioService.getUsuario(this.usuario).subscribe({
      next: (data) => {
        console.log(data);
        
        if (data.length == 0) {
          return;
        }

        if (data[0].senha == this.senha) {
          localStorage.setItem("idUsuario", "" + data[0].id);
          window.alert("SALVO")
        }else{
          window.alert("Usuario ou senha inválidos.")
        }
      }
    })
  }
}
