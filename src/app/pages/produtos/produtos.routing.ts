import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

const routes: Routes = [

  {
    path: '',
    component: ProdutosListaComponent
  },
  {
    path: 'novo',
    component: ProdutoCadastroComponent
  },
  {
    path: ':id',
    component: ProdutoCadastroComponent
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
