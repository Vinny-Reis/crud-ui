import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos.routing';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ProdutoCadastroComponent,
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
