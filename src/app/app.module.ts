import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NotesModule } from './notes/notes.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    NotesModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
