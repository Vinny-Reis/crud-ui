import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empresas } from 'src/app/core/models/empresas.model';
@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = `${environment.apiUrl}/empresa`;
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
  create(empresa: Empresas) {
    return this.http.post<any>(`${this.apiURL}`, empresa)
    .toPromise();
  }
  update(id: string, empresa: Empresas) {
    return this.http.put<any>(`${this.apiURL}/${id}`, empresa)
    .toPromise();
  }

  delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`)
    .toPromise();
  }
}