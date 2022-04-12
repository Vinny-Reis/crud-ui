import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Categorias } from 'src/app/core/models/categorias.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { Regex } from 'src/app/core/validators/regex.model';

import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css'],
})
export class CategoriaCadastroComponent implements OnInit {

  regex = new Regex();
  categorias = new Categorias();
  idcat: string;


  constructor(
    private toast: ToastService,
    private categoriaService: CategoriasService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.idcat = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Categoria');
    if (this.idcat) {
      this.carregarCategoria(this.idcat);
    }
    else { }
  }
  carregarCategoria(id: string) {
    this.categoriaService.getById(id)
      .then(obj => {
        this.categorias = obj;
      })
  }
  get editando() {
    return Boolean(this.categorias.id);
  }
  async onSubmit() {
    try {
     let result: Categorias; 
      if(this.idcat) {
        result =  await this.categoriaService.update(this.idcat, this.categorias);
        this.toast.showSucess('Categoria atualizado com sucesso');
      } else {
        result =  await this.categoriaService.create(this.categorias);
        this.toast.showSucess('Categoria cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar categoria');

    }
  }
  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Categoria: ${this.categorias.descricao}`);
  }

}
