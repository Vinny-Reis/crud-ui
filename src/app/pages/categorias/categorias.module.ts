import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias.routing';
import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [

    CategoriaCadastroComponent,
    CategoriasListaComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
