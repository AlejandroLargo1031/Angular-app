import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-palindromo',
  imports: [FormsModule],
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  palabra: string = ""

  esPalindromo(palabra: string) {
    if (palabra.toLowerCase() === palabra.toLowerCase().split('').reverse().join('') && palabra.length > 0) {
      return ('es palindromo ' + palabra);
    }else if (palabra.length > 0){
      return ("no es palindromo " + palabra);
    }
    return ;
  }
}
