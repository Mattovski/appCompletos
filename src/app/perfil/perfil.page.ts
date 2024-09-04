import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule], 
})
export class PerfilPage {

  constructor() {
    addIcons({ personCircleOutline });
  }

  toggleDarkMode(event: any) {
    document.body.classList.toggle('dark', event.detail.checked);
  }
}
