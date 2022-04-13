import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios.routing';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [

    FuncionarioCadastroComponent,
    FuncionariosListaComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
