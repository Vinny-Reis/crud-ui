import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriasService } from '../pages/categorias/categorias.service';
import { ClientesService } from '../pages/clientes/clientes.service';
import { EmpresasService } from '../pages/empresas/empresas.service';
import { FuncionariosService } from '../pages/funcionarios/funcionarios.service';


@NgModule({
  declarations: [ ],
  imports: [
    RouterModule
  ],
  providers: [
    FuncionariosService,
    CategoriasService,
    ClientesService,
    EmpresasService
  ],
  exports: [ ],
})
export class CoreModule { }
