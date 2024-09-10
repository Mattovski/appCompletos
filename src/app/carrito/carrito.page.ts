import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CarritoService, Product } from '../../services/carrito.service';
import { addIcons } from 'ionicons';
import { addCircle, closeCircle, removeCircle } from 'ionicons/icons';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CarritoPage implements OnInit {
  carrito: Product[] = [];
  total = 0;

  constructor(private cartService: CarritoService) {
    addIcons({ removeCircle, addCircle, closeCircle });
  }

  ngOnInit() {
    this.carrito = this.cartService.getCart();
    this.calculateTotal();
  }

  decreaseProduct(product: Product) {
    if (product.cantidad > 1) {
      this.cartService.decreaseProduct(product);
      this.calculateTotal();
    }
  }

  increaseProduct(product: Product) {
    this.cartService.addProduct(product);
    this.calculateTotal();
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  }

  finalizarCompra() {
    console.log("Compra finalizada");
  }
}
