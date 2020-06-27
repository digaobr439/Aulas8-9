import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar-disciplina',
  templateUrl: './adicionar-disciplina.component.html',
  styleUrls: ['./adicionar-disciplina.component.css']
})
export class AdicionarDisciplinaComponent{
  
  @Output() cursoAdicionado = new EventEmitter();

  adicionar(nome){
    const curso ={
      nome: nome
    };
    this.cursoAdicionado.emit(curso);
  }
}
