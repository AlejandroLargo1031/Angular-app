import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromo',
  imports: [FormsModule],
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  palabra: string = "";

  esPalindromo(palabra: string): string {

    if (palabra == "") {
      return 'Cadena vacía o valor no válido';
    }

    const palabraProcesada = palabra.toLowerCase().replace(/\s+/g, '');

    const esNumero = !isNaN(Number(palabraProcesada));

    if (esNumero) {
      const esCapicua = palabraProcesada === palabraProcesada.split('').reverse().join('');
      return esCapicua ? `Es capicúa: ${palabra}` : `No es capicúa: ${palabra}`;
    }

    const esPalindromo = palabraProcesada === palabraProcesada.split('').reverse().join('');
    return esPalindromo ? `Es palíndromo: ${palabra}` : `No es palíndromo: ${palabra}`;
  }
}


