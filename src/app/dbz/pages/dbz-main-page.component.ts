import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-dzb-main-page',
  templateUrl: './dbz-main-page.component.html'
})

export class dbzMainPageComponente {

  // es la lista de caracteres que le estamos enviand al hijo
  public character: Character[] = [
    {
      name: 'Trunks',
      power: 1500
    },
    {
      name: 'goky',
      power: 1000
    },
    {
      name: 'krillin',
      power: 5000
    },
];


emitCharacter(character: Character): void{
  console.log('character from mainn ')
  console.log(character)
}

}
