import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { PouchPerson } from 'src/Clases/Service/Pouch/PouchPerson.service';
import { Persona } from 'src/Clases/Entity/Personas/Persona.type';
import { PersonaService } from 'src/Clases/Service/Personas/persona.service';
import { USUSistema } from 'src/Clases/Entity/Personas/USUSistema.type';
import { LoginService } from 'src/Clases/Service/Login/Login.service';

@Component({
  selector: 'Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  providers: [PouchPerson]
})
export class Login  {
  private idColegio = "LLS";
  user: string = "";
  pass: string = "";
  logoEmpresa;
  public id_config_simulacion: string;
  private oPersonServie:PersonaService = new PersonaService();
  private oLoginService:LoginService = new LoginService();

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute, private oPouchPerson:PouchPerson
    ) {
    
  }

  ingresar(){

    if(this.user.trim() != "" && this.pass.trim() != ""){
      this.oLoginService.Login(this.idColegio, this.user,this.oPouchPerson, this.pass).then(resp =>{
        console.log(resp);
        if(resp){
          this.router.navigate(['ADM/Tablero1'])
        }else{
          alert("Informacion ingresada incorrecta");    
        }
      });      
    }else{
      alert("Ingrese usuario y contraseña")
    }

    
    //this.router.navigate(['ADM/Tablero1'])
  }

  Registrar(){

    var arrOperson = new Array<Persona>();

    var oPerson:Persona = new Persona();

    oPerson.Apellidos = "Giron Mendieta";
    oPerson.EPS = "SANITAS";
    oPerson.Id = "1";
    oPerson.IdColegio = this.idColegio;
    oPerson.LugarNacimiento = "Villarrica";
    oPerson.Ndoc = "1019086390"
    oPerson.Tdoc = "2";
    oPerson.Tipo = "ADMIN";


    oPerson.USUSistema = new USUSistema();
    oPerson.USUSistema.Clave = "1234";

    arrOperson.push(oPerson);
    this.oPersonServie.AddPersonToCouch(this.idColegio, arrOperson, this.oPouchPerson);
  }
}

