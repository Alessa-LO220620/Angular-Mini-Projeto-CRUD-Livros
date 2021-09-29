import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Livro } from './livro.model';

@Injectable()
export class LivroService {

  constructor() { }

  ListarTodos(): Livro[]{
    const livros = localStorage['livros'];
    return livros ? JSON.parse(livros) : [];
  }

  cadastrar(livro:Livro):void {
    const livros = this.ListarTodos();
    livro.id = new Date().getTime();
    livros.push(livro);
    localStorage['livros'] = JSON.stringify(livros);
  }

  // buscarPorId(id:number):Livro {
  //   const livros : Livro[] = this.ListarTodos();
  //   return livros.find(livro => livro.id === id);
  // }

  // atualizar(livro:Livro):void{
  //   const livros : Livro[] = this.ListarTodos();
  //   livros.forEach((obj, index, objs)=>{
  //     if( livro.id === obj.id){
  //       objs[index] = livro;
  //     }
  //   });
  //   localStorage['livros'] = JSON.stringify(livros);
  // }

  // remover(id:number):void {
  //   let tarefas : Tarefa[] = this.ListarTodos();
  //   tarefas = tarefas.filter(tarefas => tarefas.id !==id);
  //   localStorage['tarefas'] = JSON.stringify(tarefas);
  // }

  alterarStatus(id:number):void{
    const livros : Livro[] = this.ListarTodos();
    livros.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].status = !obj.status; 
      }
    });
    localStorage['livros'] = JSON.stringify(livros);
  }
}
