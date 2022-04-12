import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Empresas } from 'src/app/core/models/empresas.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { Regex } from 'src/app/core/validators/regex.model';
import { EmpresasService } from '../empresas.service';


@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css'],
})
export class EmpresaCadastroComponent implements OnInit {

  regex = new Regex();
  empresas = new Empresas();
  idempr: string;
  
  constructor(
    private toast: ToastService,
    private empresaService: EmpresasService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {

    this.idempr = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Empresa');
    if (this.idempr) {
      this.carregarEmpresa(this.idempr);
    }
    else { }
  }
  carregarEmpresa(id: string) {
    this.empresaService.getById(id)
      .then(obj => {
        this.empresas = obj;
      })
  }

  get editando() {
    return Boolean(this.empresas.id);
  }

  async onSubmit() {
    try {
     let result: Empresas; 
      if(this.idempr) {
        result =  await this.empresaService.update(this.idempr, this.empresas);
        this.toast.showSucess('Empresa atualizado com sucesso');
      } else {
        result =  await this.empresaService.create(this.empresas);
        this.toast.showSucess('Empresa cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar empresa');

    }

  } 
    atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Cliente: ${this.empresas.razaoSocial}`);
  }

}
