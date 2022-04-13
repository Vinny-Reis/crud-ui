import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Funcionarios } from 'src/app/core/models/funcionarios';
import { ToastService } from 'src/app/core/services/toast.service';
import { Regex } from 'src/app/core/validators/regex.model';

import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css'],
})
export class FuncionarioCadastroComponent implements OnInit {

  regex = new Regex();
  funcionarios = new Funcionarios();
  idfunc: string;


  constructor(
    private toast: ToastService,
    private funcionarioService: FuncionariosService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.idfunc = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Funcionario');
    if (this.idfunc) {
      this.carregarFuncionario(this.idfunc);
    }
    else { }
  }
  carregarFuncionario(id: string) {
    this.funcionarioService.getById(id)
      .then(obj => {
        this.funcionarios = obj;
      })
  }
  get editando() {
    return Boolean(this.funcionarios.id);
  }
  async onSubmit() {
    try {
     let result: Funcionarios; 
      if(this.idfunc) {
        result =  await this.funcionarioService.update(this.idfunc, this.funcionarios);
        this.toast.showSucess('Funcionario atualizado com sucesso');
      } else {
        result =  await this.funcionarioService.create(this.funcionarios);
        this.toast.showSucess('Funcionario cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar funcionario');

    }
  }
  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Funcionario: ${this.funcionarios.nome}`);
  }

}
