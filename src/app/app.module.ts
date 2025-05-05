import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterModule } from './counter/counter.module';
import { heroModule } from './heroes/heros.module';
import { dragonBzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    heroModule,
    dragonBzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
