import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesHomeComponent } from './notes-home/notes-home.component';


@NgModule({
  declarations: [
    NotesHomeComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
