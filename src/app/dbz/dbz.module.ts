import { NgModule } from '@angular/core';
import { dbzMainPageComponente } from './pages/dbz-main-page.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    dbzMainPageComponente,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    dbzMainPageComponente
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class dragonBzModule { }
