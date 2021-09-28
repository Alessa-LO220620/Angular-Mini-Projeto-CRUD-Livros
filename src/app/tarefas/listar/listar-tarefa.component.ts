import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa} from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  
  tarefas : Tarefa[]

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
    this.tarefas = [
      new Tarefa(1, 'A volta do mundo em Balão', 'Julio Verne', 'Record', 1895, true),
      new Tarefa(2, 'Como conversar com um Fascista', 'Marcia Tiburi', 'Record', 2015, true),
      new Tarefa(3, 'Anti-Edipo', 'Guilles Deleuze', 'Humis', 1995, false)
    ]
  }
  listarTodos() : Tarefa[]{
    return this.tarefaService.ListarTodos();
  }
}
