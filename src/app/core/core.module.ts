import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientesService } from '../pages/clientes/clientes.service';
import { EmpresasService } from '../pages/empresas/empresas.service';
//import { Categorias } from './models/categorias.model';

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule
  ],
  providers: [
    //CategoriasService,
    ClientesService,
    EmpresasService
  ],
  exports: [ ],
})
export class CoreModule { }
