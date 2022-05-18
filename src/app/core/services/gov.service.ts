import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GovService {



  cnpjUrl: string;
  constructor(
    private http: HttpClient
  ) { 
    this.cnpjUrl = `https://brasilapi.com.br/api/cnpj/v1`;
  }

  consultaCEP(cep:string){
    //Nova variavel "cep" somente com dígitos
    cep = cep.replace(/\D/g, '');
    //Verefica se o campo cep possuir valor informado
    if (cep !== ''){
      // Expressão regular para validar cep
      const validacep = /^[0-9]{8}$/;
      // Valida o formato do cep
      if (validacep.test(cep)){
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
    return of({});
  }

  consultaCNPJ(cnpj:string){
    //Nova variavel "cnpj" somente com dígitos
    cnpj = cnpj.replace(/\D/g, '');
    //Verefica se o campo cnpj possuir valor informado
    if (cnpj !== ''){
      // Expressão regular para validar cnpj
      const validacnpj = /^[0-9]{14}$/;
      // Valida o formato do cnpj
      if (validacnpj.test(cnpj)){
        return this.http.get(`${this.cnpjUrl}/${cnpj}`);
      }
    }
    return of({});
  }


}
