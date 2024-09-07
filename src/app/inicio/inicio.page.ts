import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CarritoService, Product } from '../../services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class InicioPage implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CarritoService) {}

  ngOnInit() {
    this.products = [
      { id: 1, nombre: 'Completo Italiano', descripcion: 'Palta, tomate y mayo', precio: 3000, cantidad: 0 },
      { id: 2, nombre: 'Completo Palta', descripcion: 'Palta', precio: 3500, cantidad: 0 },
    ];
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
