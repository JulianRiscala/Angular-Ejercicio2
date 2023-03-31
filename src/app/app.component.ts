import { Component } from '@angular/core';
import { usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'ejercicio2';
  public usuario1: usuario;
  constructor(){
    this.usuario1 = new usuario();
    this.usuario1.nombre= "Julian";
    this.usuario1.clave="mango";
  }
}
