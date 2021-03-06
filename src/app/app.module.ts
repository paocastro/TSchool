import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CardModule } from 'primeng/card';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';


import { Login } from './General/Login/Login.component';
import { EncabezadoComponent } from './General/Encabezado/Encabezado.component';
import { Tablero1Component } from './TablerosControl/Tablero1/Tablero1.component';
import { AppMenuComponent, AppSubMenuComponent } from './General/app-menu.component';
import { addEstudianteComponent } from './School/Matriculas/addEstudiante.component';
import { DatePickerComponent } from './Controles/date-picker/date-picker.component';
import { contactoComponent } from './Controles/Contacto/Contacto.component';
import { SearchStudentComponent } from './Controles/search-student/search-student.component';
import { eventosComponent } from './School/Eventos/Eventos.component';


@NgModule({
  declarations: [
    AppComponent,
    Login, AppMenuComponent, AppSubMenuComponent, EncabezadoComponent, Tablero1Component,
    addEstudianteComponent, DatePickerComponent, contactoComponent, SearchStudentComponent,
    eventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    AngularFontAwesomeModule, FormsModule, ButtonModule,
    ScrollPanelModule, BrowserAnimationsModule,
    InputTextModule, DropdownModule, NgbModule, TableModule, HttpClientModule, AutoCompleteModule,
    InputTextareaModule, CalendarModule,MatSnackBarModule,DataViewModule,PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
