
import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  // para declara los componentes de nuestro modulo
  declarations: [
    CounterComponent
  ],
  // para exportar los componentes al mundo exterior(que se puede usar afuera )
  exports: [
    CounterComponent
  ]
})

export class counterModule {}
