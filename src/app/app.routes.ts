import { Routes } from '@angular/router';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

export const routes: Routes = [
    {path:"login", component: TelaLoginComponent},
    {path:"cadastro", component: TelaCadastroComponent},
    {path:"**", component: TelaLoginComponent}
];
