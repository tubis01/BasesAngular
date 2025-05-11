import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  // public emitDeleteIndex: EventEmitter<number> = new EventEmitter();
  public emitDeleteIndex: EventEmitter<string> = new EventEmitter();
  // estamos recibiendo datos del padre
  @Input()
  public characterList: Character[] = [];

  // emitDeleteCharacter(index:number): void{
  //   this.emitDeleteIndex.emit(index)
  // }
  emitDeleteCharacter(id?:string): void{
    if(!id) return;
    this.emitDeleteIndex.emit(id)

  }
}
