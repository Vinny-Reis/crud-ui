import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css'],
})
export class ProdutosListaComponent implements OnInit {

  produtos: any[] = [];
  constructor(
    private produtosService: ProdutosService ,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() { }

  ionViewDidEnter(){
    this.carregarLista();
   }

  carregarLista() {
    this.produtosService.getAll()
      .then(obj => {
        this.produtos = obj;
      })
  }

  remove(produtos: any) {
    this.alert.showConfirmDelete(produtos.descricao, () => this.executeRemove(produtos));
  }

  executeRemove(func: any){
    try {
      const index = this.produtos.indexOf(func);
      this.produtos.splice(index, 1);
      this.produtosService.delete(func.id);

      this.toast.showSucess('Produto removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o produto');
    }
  }
}
