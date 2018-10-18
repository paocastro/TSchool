import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/Clases/Entity/Personas/Contacto.type';
import { Estudiante } from 'src/Clases/Entity/Personas/Estudiante.type';
import { Persona } from 'src/Clases/Entity/Personas/Persona.type';
import { PouchPerson } from 'src/Clases/Service/Pouch/PouchPerson.service';
import { PersonaService } from 'src/Clases/Service/Personas/persona.service';
import { Diario } from 'src/Clases/Entity/TRX/Diario.type';
import { DiarioService } from 'src/Clases/Service/Trx/Diario.service';

@Component({
  selector: 'addEstudiante',
  templateUrl: './addEstudiante.component.html',
  styleUrls: ['./addEstudiante.component.css'],
  providers: [PouchPerson]
})
export class addEstudianteComponent {
  cursos;
  tDocumentos;
  oListaDirecciones: Array<Contacto>;
  oListaTelefonos: Array<Contacto>;
  oListaEmail: Array<Contacto>;
  idColegio:string="LLS";
  oEstudiante:Persona;

  private oPersonServie:PersonaService = new PersonaService();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,private oPouchPerson:PouchPerson
  ) {
    this.inicializar();

  }

  inicializar(){
    this.oEstudiante= new Persona();
    this.oEstudiante.Estudiante= new Estudiante();
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

  selectedDate(iFecha){
    this.oEstudiante.FechaNac=iFecha;
  }

  guardar(){
    this.oEstudiante.IdColegio= this.idColegio
    this.oEstudiante.listContacts = new Array<Contacto>();
    this.oEstudiante.Id="2018" + this.oEstudiante.Ndoc 
    this.recorrerListaContacto(this.oListaDirecciones)
    this.recorrerListaContacto(this.oListaEmail)
    this.recorrerListaContacto(this.oListaTelefonos)
    console.log(this.oEstudiante)
    this.oPersonServie.AddPersonUnitToCouch(this.idColegio,this.oEstudiante,this.oPouchPerson)
    this.crearDiario()
  }

  crearDiario(){
    var oDiario= new Diario();
    var oDiarioService= new DiarioService();
    oDiario.IdColegio= this.idColegio
    oDiario.Fecha = new Date();
    oDiario.IdPersonaACT = localStorage.getItem("usuario")
    oDiario.Dato1=this.oEstudiante.Id
    oDiarioService.AddDiarioUnitToCouch(this.idColegio,oDiario,this.oPouchPerson)
  }

  recorrerListaContacto(oLista:Array<Contacto>){
    oLista.forEach(x => 
        {this.oEstudiante.listContacts.push(x) }
      )
  }
}

