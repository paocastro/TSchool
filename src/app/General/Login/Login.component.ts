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
          localStorage.setItem("usuario",this.user)
          this.router.navigate(['ADM/addEstudiante'])
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

    // oPerson.Apellidos = "Giron Mendieta";
    // oPerson.EPS = "SANITAS";
    // oPerson.Id = "1";
    // oPerson.IdColegio = this.idColegio;
    // oPerson.LugarNacimiento = "Villarrica";
    // oPerson.Ndoc = "1019086390"
    // oPerson.Tdoc = "2";
    // oPerson.Tipo = "ADMIN";

    oPerson = new Persona();
    oPerson.Nombres = "Johan";
    oPerson.Apellidos = "cárdenas";
    oPerson.Ndoc = "1000160235";
    oPerson.Tdoc = "1";
    oPerson.USUSistema = new USUSistema();
    oPerson.USUSistema.Clave = "0235";
    arrOperson.push(oPerson);

    oPerson = new Persona();
    oPerson.Nombres = "Brahian";
    oPerson.Apellidos = "Sanchez";
    oPerson.Ndoc = "1007699573";
    oPerson.Tdoc = "1";
    oPerson.USUSistema = new USUSistema();
    oPerson.USUSistema.Clave = "9573";
    arrOperson.push(oPerson);

    oPerson = new Persona();
    oPerson.Nombres = "Valentina";
    oPerson.Apellidos = "Ortiz";
    oPerson.Ndoc = "1007011715";
    oPerson.Tdoc = "2";
    oPerson.USUSistema = new USUSistema();
    oPerson.USUSistema.Clave = "1715";
    arrOperson.push(oPerson);

    oPerson = new Persona();
    oPerson.Nombres = "Laura";
    oPerson.Apellidos = "Marín";
    oPerson.Ndoc = "1000019564";
    oPerson.Tdoc = "1";
    oPerson.USUSistema = new USUSistema();
    oPerson.USUSistema.Clave = "9564";
    arrOperson.push(oPerson);

    oPerson = new Persona();
    oPerson.Nombres = "Xiomara";
    oPerson.Apellidos = "Jurado";
    oPerson.Ndoc = "1022972311";
    oPerson.Tdoc = "2";
    oPerson.USUSistema = new USUSistema();
    oPerson.USUSistema.Clave = "2311";
    arrOperson.push(oPerson);

    
    
    this.oPersonServie.AddPersonToCouch(this.idColegio, arrOperson, this.oPouchPerson);
  }
}

