import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';

const routes: Routes = [

  {
    path: '',
    component: FuncionariosListaComponent
  },
  {
    path: 'novo',
    component: FuncionarioCadastroComponent
  },
  {
    path: ':id',
    component: FuncionarioCadastroComponent
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
