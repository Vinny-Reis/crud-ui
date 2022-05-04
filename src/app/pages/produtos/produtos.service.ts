import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from 'src/app/core/models/produtos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  apiURL: string;

  constructor(
    private http: HttpClient
  ) {

      this.apiURL = `${environment.apiUrl}/produto`;
   }


   getAll() {
    return this.http.get<any>(`${this.apiURL}`)
      .toPromise()
      .then(response => response);
   }

   getById(id: string) {
    return this.http.get<any>(`${this.apiURL}/${id}`)
      .toPromise();
  }

   create(produto: Produtos) {
    return this.http.post<any>(`${this.apiURL}`, produto)
    .toPromise();
  }

    update(id: string, produto: Produtos){
      return this.http.put<any>(`${this.apiURL}/${id}`, produto)
      .toPromise();
    }

    delete(id: string){
      return this.http.delete(`${this.apiURL}/${id}`)
      .toPromise();
    }
}


