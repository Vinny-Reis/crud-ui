import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-lista',
  templateUrl: './funcionarios-lista.component.html',
  styleUrls: ['./funcionarios-lista.component.css'],
})
export class FuncionariosListaComponent implements OnInit {

  funcionarios: any[] = [];
  constructor(
    private funcionariosService: FuncionariosService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() { }

  ionViewDidEnter(){
    this.carregarLista();
   }

  carregarLista() {
    this.funcionariosService.getAll()
      .then(obj => {
        this.funcionarios = obj;
      })
  }

  remove(funcionarios: any) {
    this.alert.showConfirmDelete(funcionarios.nome, () => this.executeRemove(funcionarios));
  }

  executeRemove(func: any){
    try {
      const index = this.funcionarios.indexOf(func);
      this.funcionarios.splice(index, 1);
      this.funcionariosService.delete(func.id);

      this.toast.showSucess('Funcionario removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o funcionario');
    }
  }
}
