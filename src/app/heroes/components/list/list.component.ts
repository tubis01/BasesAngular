import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spider man', 'Thor', 'Aquaman', 'Hulk', 'asdfasdf'];

  public heroDeleted?:string;


  deletedHero(){
    this.heroDeleted = this.heroNames.pop();
  }
}
