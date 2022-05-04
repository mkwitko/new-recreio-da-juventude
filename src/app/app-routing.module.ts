import { AuthGuard } from './guards/auth.guard';
/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/menu/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reserva-atividade',
    loadChildren: () => import('./pages/menu/contratacoes/reserva-atividade/reserva-atividade.module').then( m => m.ReservaAtividadePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reserva-espaco',
    loadChildren: () => import('./pages/menu/contratacoes/reserva-espaco/reserva-espaco.module').then( m => m.ReservaEspacoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'compra-ingresso',
    loadChildren: () => import('./pages/menu/contratacoes/compra-ingresso/compra-ingresso.module').then( m => m.CompraIngressoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contratacao-servico',
    loadChildren: () => import('./pages/menu/contratacoes/contratacao-servico/contratacao-servico.module').then( m => m.ContratacaoServicoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pagamentos',
    loadChildren: () => import('./pages/menu/contratacoes/pagamentos/pagamentos.module').then( m => m.PagamentosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mapa-clube',
    loadChildren: () => import('./pages/menu/clube/mapa-clube/mapa-clube.module').then( m => m.MapaClubePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/menu/clube/eventos/eventos.module').then( m => m.EventosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'convenios',
    loadChildren: () => import('./pages/menu/clube/convenios/convenios.module').then( m => m.ConveniosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'duvidas-frequentes',
    loadChildren: () => import('./pages/menu/suporte/duvidas-frequentes/duvidas-frequentes.module').then( m => m.DuvidasFrequentesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'fale-conosco',
    loadChildren: () => import('./pages/menu/suporte/fale-conosco/fale-conosco.module').then( m => m.FaleConoscoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./pages/menu/minha-conta/meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meus-ingressos',
    loadChildren: () => import('./pages/menu/minha-conta/meus-ingressos/meus-ingressos.module').then( m => m.MeusIngressosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'minhas-reservas',
    loadChildren: () => import('./pages/menu/minha-conta/minhas-reservas/minhas-reservas.module').then( m => m.MinhasReservasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meus-dependentes',
    loadChildren: () => import('./pages/menu/minha-conta/meus-dependentes/meus-dependentes.module').then( m => m.MeusDependentesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lista-espera',
    loadChildren: () => import('./pages/menu/minha-conta/lista-espera/lista-espera.module').then( m => m.ListaEsperaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'servicos-contratados',
    loadChildren: () => import('./pages/menu/minha-conta/servicos-contratados/servicos-contratados.module').then( m => m.ServicosContratadosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'meus-treinos',
    loadChildren: () => import('./pages/menu/minha-conta/meus-treinos/meus-treinos.module').then( m => m.MeusTreinosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reserva-home',
    loadChildren: () => import('./pages/reservas/reserva-home/reserva-home.module').then( m => m.ReservaHomePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
