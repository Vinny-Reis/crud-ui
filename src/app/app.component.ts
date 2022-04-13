import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home',        url: '/',           icon: 'home' },
    { title: 'Clientes',    url: 'clientes',    icon: 'people' },
    { title: 'Empresas',    url: 'empresas',    icon: 'business' },
    { title: 'Categorias',  url: 'categorias',  icon: 'people' },
    { title: 'Funcionarios', url: 'funcionarios', icon: 'people' }
    
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
