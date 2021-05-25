import { Component, OnInit } from '@angular/core';
// importe necessário para fazer a navegação
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // espaera essa rota ser ingetada pelo Angular por isso passamos no construtor
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // criando a function de navegação
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}
