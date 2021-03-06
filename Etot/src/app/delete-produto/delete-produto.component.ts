import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertsService } from '../service/alerts.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {


  produto: Produto = new Produto()


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertsService,
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id: number = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto=resp
    })
  }

  btnSim() {
    this.produtoService.deleteProduto(this.produto.id).subscribe(() => {
      this.alert.showAlertSuccess('Produto excluído com sucesso!')
      this.router.navigate(['/manutencao'])
      
    })
  }

  btnNao(){
    this.router.navigate(['/manutencao'])
  }

}
