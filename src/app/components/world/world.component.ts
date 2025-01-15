import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-world',
  imports: [FormsModule],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
  @Input() nombreWorld: string = "";
  @Output() emisor = new EventEmitter<string>()
  mensajeAlPadre = ""
}
