import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   //  {
   //path: 'folder/:id',
   //  loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
   //   }

   {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then( m => m.EmpresasModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then (m => m.CategoriasModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./pages/funcionarios/funcionarios.module').then (m => m.FuncionariosModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then (m => m.ProdutosModule)
  }
  
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
