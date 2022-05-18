import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Empresas } from 'src/app/core/models/empresas.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { Regex } from 'src/app/core/validators/regex.model';
import { EmpresasService } from '../empresas.service';
import { GovService } from 'src/app/core/services/gov.service';
import { TouchSequence } from 'selenium-webdriver';


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
    private govService: GovService,
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
    this.title.setTitle(`Edição de Cliente: ${this.empresas.cnpj}`);
  }


  consultaCEP(cep, form){
    let newCep = cep.model;
    newCep = newCep.replace(/\D/g, '');
    if (newCep !== null && newCep !== '') {
      this.resetFormCep(form);
      this.govService
        .consultaCEP(newCep)
        .subscribe((dados) => 
        this.populaCEPForm(dados, form));
    }
  }

  populaCEPForm(dados, formulario) {
    formulario.form.patchValue({
      logradouro: dados.logradouro.toUpperCase(),
      localidade: dados.localidade.toUpperCase(),
      bairro: dados.bairro.toUpperCase(),
      numero: dados.numero,
      complemento: dados.complemento.toUpperCase(),
      uf: dados.uf.toUpperCase(),
    });
  }

  resetFormCep(formulario) {
    formulario.form.patchValue({
      logradouro: null,
      localidade: null,
      bairro: null,
      numero: null,
      complemento: null,
      uf: null,
    });
  }
  consultaCNPJ(cnpj, form){
    console.log(cnpj);
    let newCnpj = cnpj.model;
    newCnpj = newCnpj.replace(/\D/g, '');
  
    if( newCnpj != null && newCnpj !== ''){
      this.resetaCnpjForm(form);
      this.govService.consultaCNPJ(newCnpj)
      .subscribe((dados) => 
      this.populaCnpjForm(dados, form));
      console.log(form);
    }
  }

  populaCnpjForm(dados, formulario){
  
    formulario.form.patchValue({
      razao_social: dados.razao_social.toUpperCase(),
      cep: dados.cep,
      logradouro: dados.logradouro.toUpperCase(),
      numero: dados.numero,
      complemento: dados.complemento.toUpperCase(),
      bairro: dados.bairro.toUpperCase(),
      uf: dados.uf.toUpperCase(),
      ddd_telefone_1: dados.ddd_telefone_1
    })
    this.empresas.localidade = dados.municipio.toUpperCase();
  }

  resetaCnpjForm(formulario){
    formulario.form.patchValue({
      razao_social: null,
      cep: null,
      logradouro: null,
      numero: null,
      complemento: null,
      bairro: null,
      uf: null,
      ddd_telefone_1: null
    })
  }

}
