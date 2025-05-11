import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 1500
    },
    {
      id: uuid(),
      name: 'goky',
      power: 1000
    },
    {
      id: uuid(),
      name: 'krillin',
      power: 5000
    },
  ];


  addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);

  }

  // this.character.splice(index)
  // onDeleteCharacter(index: number){
  delteCharacterById(id: string) {

    this.characters = this.characters.filter(character => character.id !== id)

  }

}
