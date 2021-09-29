import { Component, OnInit } from '@angular/core';
import { LivroService, Livro} from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {
  
  livros: Livro[]

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.livros = this.listarTodos();
    // this.livros = [
    //   new Livro(1, 'A volta do mundo em Balão', 'Julio Verne', 'Record', 1895, true),
    //   new Livro(2, 'Como conversar com um Fascista', 'Marcia Tiburi', 'Record', 2015, true),
    //   new Livro(3, 'Anti-Edipo', 'Guilles Deleuze', 'Humis', 1995, false)
    // ]
  }
  
  listarTodos() : Livro[]{
    return this.livroService.ListarTodos();
  }

  alterarStatus(livro:Livro):void{
    if(confirm('Deseja alterar o status desse livro "' +livro.titulo+'"?')){
      this.livroService.alterarStatus(livro.id);
      this.livros = this.listarTodos()
    }
  }

}
