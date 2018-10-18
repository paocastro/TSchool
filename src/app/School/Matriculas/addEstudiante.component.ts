import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'addEstudiante',
  templateUrl: './addEstudiante.component.html',
  styleUrls: ['./addEstudiante.component.css'],
  providers: []
})
export class addEstudianteComponent  {
  cursos;

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {

      this.cursos = [
        {label:'seleccione curso', value:null},
        {label:'Kinder', value:"K"},
        {label:'Transición', value:"T"},
        {label:'Primero', value:"1"},
        {label:'Segundo', value:"2"},
        {label:'Tercero', value:"3"},
        {label:'Cuarto', value:"4"},
        {label:'Quinto', value:"5"},
        {label:'Sexto', value:"6"},
        {label:'Septimo', value:"7"},
        {label:'Octavo', value:"8"},
        {label:'Noveno', value:"9"},
        {label:'Decimo', value:"10"},
        {label:'Once', value:"11"},
    ];
    
  }

  
}

