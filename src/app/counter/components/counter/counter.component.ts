import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="incraseBy(+1)"> +1 </button>
  <button (click)="reset()">Reset</button>
  <button (click)="incraseBy(-1)"> -1 </button>

  `
})

export class CounterComponent  {
  constructor() { }

  public counter: number = 10;


  incraseBy(value:number): void{
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

}
