import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EmpresasRoutingModule } from './empresas.routing';
import { EmpresasListaComponent } from './empresas-lista/empresas-lista.component';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';



@NgModule({
  declarations: [
    EmpresasListaComponent,
    EmpresaCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresasRoutingModule
  ]
})
export class EmpresasModule { }
