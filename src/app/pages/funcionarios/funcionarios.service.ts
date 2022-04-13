import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionarios } from 'src/app/core/models/funcionarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  apiURL: string;

  constructor(
    private http: HttpClient
  ) {

      this.apiURL = `${environment.apiUrl}/funcionario`;
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

   create(funcionario: Funcionarios) {
    return this.http.post<any>(`${this.apiURL}`, funcionario)
    .toPromise();
  }

    update(id: string, funcionario: Funcionarios){
      return this.http.put<any>(`${this.apiURL}/${id}`, funcionario)
      .toPromise();
    }

    delete(id: string){
      return this.http.delete(`${this.apiURL}/${id}`)
      .toPromise();
    }
}


