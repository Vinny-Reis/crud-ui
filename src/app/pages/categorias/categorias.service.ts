import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Categorias } from 'src/app/core/models/categorias.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiURL: string;

  constructor(
    private http: HttpClient
  ) {
    // forma hardcode
    // this.apiURL = 'https://60d49dd961160900173cbbb9.mockapi.io/v1/clientes';
    this.apiURL = `${environment.apiUrl}/categoria`;
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

  create(categoria: Categorias) {
    return this.http.post<any>(`${this.apiURL}`, categoria)
    .toPromise();
  }

  update(id: string, categoria: Categorias) {
    return this.http.put<any>(`${this.apiURL}/${id}`, categoria)
    .toPromise();
  }
  
  delete(id: string) {
    return this.http.delete(`${this.apiURL}/${id}`)
      .toPromise();
  }
}
