import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iron Man';
  public age:   number = 45;

  public botonUsado: boolean = false;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${ this.name } -  ${ this.age }`;

  }

  // TODO:
  changeHero():void {
    // throw 'metodo  no implementado' - forma de documentar un metodo que tenemos pendiente.
    this.name = 'spider'
    this.botonUsado = true;
  }

  changeAge(): void{
    this.age = 25;
    this.botonUsado = true;
  }

  restablecer(): void {
    this.name = 'iron Man';
    this.age  = 45;
    this.botonUsado = false;
  }


}
