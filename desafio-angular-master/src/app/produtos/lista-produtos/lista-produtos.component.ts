import { Component, OnInit } from '@angular/core';
import { Produto} from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styles : [],
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtosService : ProdutosService) { 
    this.produtos = [];
  }
 
  public produtos : Produto[];

  ngOnInit(): void {
    this.produtosService.obterProdutos()
      .subscribe(
        resultado => {
          this.produtos = resultado;
          console.log(resultado);
        },
        error => console.log(error)
        
      );
  }

}
