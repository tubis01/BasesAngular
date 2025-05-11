import { Component, OnInit } from '@angular/core';
import { Character } from '../interface/character.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dzb-main-page',
  templateUrl: './dbz-main-page.component.html'
})

export class dbzMainPageComponente {

  // es la lista de caracteres que le estamos enviand al hijo

  // La inyeccino de dependecias fomenta la composicion antes que la herencia.
  constructor( private dbzService: DbzService){}

  get characters(): Character[]{
    return this.dbzService.characters;
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.delteCharacterById( id )
  }

  onNewCharacter(character: Character) : void {
    this.dbzService.addCharacter(  character )
  }

}
