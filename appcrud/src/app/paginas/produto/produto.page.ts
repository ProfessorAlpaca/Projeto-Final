import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
produtos: Produto[];

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.service.getAll().subscribe(resposta => {
      this.produtos = resposta;
    });
  }

}
