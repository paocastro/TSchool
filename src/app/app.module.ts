import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import {CardModule} from 'primeng/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Login } from './General/Login/Login.component';
import { EncabezadoComponent } from './General/Encabezado/Encabezado.component';
import { Tablero1Component } from './TablerosControl/Tablero1/Tablero1.component';
import { AppMenuComponent, AppSubMenuComponent } from './General/app-menu.component';
import { addEstudianteComponent } from './School/Matriculas/addEstudiante.component';
@NgModule({
  declarations: [
    AppComponent,
    Login,AppMenuComponent,AppSubMenuComponent,EncabezadoComponent,Tablero1Component,
    addEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    AngularFontAwesomeModule,FormsModule,ButtonModule,
    ScrollPanelModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
