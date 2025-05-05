import { Component, Input } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // estamos recibiendo datos del padre 
  @Input()
  public characterList: Character[] = [];
}
