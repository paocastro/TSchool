import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/Clases/Entity/Personas/Contacto.type';

@Component({
  selector: 'addEstudiante',
  templateUrl: './addEstudiante.component.html',
  styleUrls: ['./addEstudiante.component.css'],
  providers: []
})
export class addEstudianteComponent {
  cursos;
  tDocumentos;
  oListaDirecciones: Array<Contacto>;
  oListaTelefonos: Array<Contacto>;
  oListaEmail: Array<Contacto>;
  oEstudiante;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.oListaDirecciones = new Array<Contacto>();
    this.oListaTelefonos = new Array<Contacto>();
    this.oListaEmail = new Array<Contacto>();
    this.tDocumentos = [
      { label: 'Tipo de documento', value: null },
      { label: 'Registro Civil', value: "0" },
      { label: 'Tarjeta de identidad', value: "1" },
      { label: 'Cédula de ciudadanía', value: "2" },
      { label: 'Cédula de extranjería', value: "3" },
    ]
    this.cursos = [
      { label: 'seleccione curso', value: null },
      { label: 'Kinder', value: "K" },
      { label: 'Transición', value: "T" },
      { label: 'Primero', value: "1" },
      { label: 'Segundo', value: "2" },
      { label: 'Tercero', value: "3" },
      { label: 'Cuarto', value: "4" },
      { label: 'Quinto', value: "5" },
      { label: 'Sexto', value: "6" },
      { label: 'Septimo', value: "7" },
      { label: 'Octavo', value: "8" },
      { label: 'Noveno', value: "9" },
      { label: 'Decimo', value: "10" },
      { label: 'Once', value: "11" },
    ];

  }

  eventAgregoContacto(iContacto) {
    switch (iContacto.Tipo) {
      case "Direcciones":
        this.oListaDirecciones.push(iContacto);
        break;
      case "Telefonos":
        this.oListaTelefonos.push(iContacto);
        break;
      case "Email":
        this.oListaEmail.push(iContacto);
        break;
    }
   
  }
}

