import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // output es para emitir eventos al padre, y usamoe
  @Output()
  public emitNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if(this.character.name.length === 0 ) return;

    // me ayuda a detener la aplicacion en este punto y poder analizar como va el flujo de mi aplicacion

    // debugger;

    // emito el evento que es de tipo character
    this.emitNewCharacter.emit(this.character)

    this.character.name  ='';
    this.character.power = 0 ;

  }


}
