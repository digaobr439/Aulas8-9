import { Component } from '@angular/core';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeira-atividade-angular';
  cursos =[
    {nome: 'Redes'},
    {nome: 'Microcontroladores e Sistemas Embarcados'},
    {nome: 'Linguagens de Programação II'},
    {nome: 'Engenharia de Software'},
    {nome: 'Engenharia de Software'},
    {nome: 'Sistemas Embarcados'},
    {nome: 'Bancos de Dados'},
    {nome: 'Empreendedorismo'}
  ];
  onAdicionarCurso(curso){
    this.cursos = [curso, ...this.cursos];
  }
}
