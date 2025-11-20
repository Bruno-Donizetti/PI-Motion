import { Component } from '@angular/core';
import { JanelaCadastroComponent } from "../janela/janela-cadastro/janela-cadastro.component";
import { InputComponent } from "../assets/input/input.component";
import { BotaoComponent } from "../assets/botao/botao.component";
import { Usuario, UsuarioService } from '../services/usuario/usuario.service';
import { CPF } from '../models/CPF';

@Component({
  selector: 'app-tela-cadastro',
  standalone: true,
  imports: [JanelaCadastroComponent, InputComponent, BotaoComponent],
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.scss'
})

export class TelaCadastroComponent {

  constructor(private usuarioService:UsuarioService) {}

  user:Usuario = {
    usuario: "",
    cpf: "",
    senha: ""
  }
  
  confirmarSenha:string = "";

  setUsuario(event:string){
    this.user.usuario = event;
  }

  setCpf(event:string){
    this.user.cpf = event;
  }

  setSenha(event:string){
    this.user.senha = event;
  }

  setConfirmarSenha(event:string){
    this.confirmarSenha = event;
  }

  validarDados():boolean{
    if (this.user.usuario == "" || this.user.senha == "") {
      window.alert("Preencha todos os campos.");
      return false;
    }

    if (this.user.senha != this.confirmarSenha) {
      window.alert("As senhas são diferentes");
      return false;
    }

    if (!CPF.validarCPF(this.user.cpf)) {
      window.alert("CPF INVALIDO");
      return false;
    }

    return true;

  }

  

  cadastrar(){
    if (this.validarDados()) {
      // se o usuario não existe, adiciona
    this.usuarioService.getUsuario(this.user.usuario).subscribe({
      next: (data) => {
        if (data.length == 0) {
          this.usuarioService.cadastrar(this.user);
        }else{
          window.alert("Usuario já existe...")
        }
      }
    });
    }
  }
}
