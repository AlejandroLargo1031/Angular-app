import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorldComponent } from '../world/world.component';
import { RouterLink } from '@angular/router';
import { PalindromoComponent } from "../palindromo/palindromo.component";

@Component({
  selector: 'app-hello',
  imports: [FormsModule, WorldComponent, RouterLink],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  mensajeDelhijo: string = ""

  nombre: string = ""
  listNombres = [
    {
      nombre: "Juan",
      apellido: "Perez"
    },
    {
      nombre: "Ana",
      apellido: "Garcia"
    },
    {
      nombre: "Pedro",
      apellido: "Lopez"
    }
  ]

  onEmit(mensaje: string) {
    this.mensajeDelhijo = mensaje
    window.alert("Mensaje recibido con exito: " + mensaje)

  }
}
