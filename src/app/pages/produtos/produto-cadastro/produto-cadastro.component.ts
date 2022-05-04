import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Produtos } from 'src/app/core/models/produtos.model';

import { ToastService } from 'src/app/core/services/toast.service';
import { Regex } from 'src/app/core/validators/regex.model';

import { ProdutosService } from '../produtos.service';
import { CategoriasService } from '../../categorias/categorias.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css'],
})
export class ProdutoCadastroComponent implements OnInit {

  regex = new Regex();
  produtos = new Produtos();
  id: string;
  categorias = []


  constructor(
    private toast: ToastService,
    private produtoService: ProdutosService,
    private categoriaService: CategoriasService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.id = this.route.snapshot.paramMap.get
    ('id');
    
    if (this.id) {
      this.carregarProduto(this.id);
    }
  }
  
  async carregarCategorias(){
    this.categorias = await this.categoriaService.getAll();
  }

  carregarProduto(id: string) {
    this.produtoService.getById(id)
      .then(obj => {
        this.produtos = obj;
      })
  }
  get editando() {
    return Boolean(this.produtos.id);
  }
  async onSubmit() {
    try {
     let result: Produtos; 
      if(this.id) {
        result =  await this.produtoService.update(this.id, this.produtos);
        this.toast.showSucess('Produto atualizado com sucesso');
      } else {
        result =  await this.produtoService.create(this.produtos);
        this.toast.showSucess('Produto cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar produto');
    }

  }
  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Funcionario: ${this.produtos.descricao}`);
  }

}
