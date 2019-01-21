import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { PouchPerson } from 'src/Clases/Service/Pouch/PouchPerson.service';
import { Persona } from 'src/Clases/Entity/Personas/Persona.type';
import { PersonaService } from 'src/Clases/Service/Personas/persona.service';
import { USUSistema } from 'src/Clases/Entity/Personas/USUSistema.type';
import { LoginService } from 'src/Clases/Service/Login/Login.service';
import { conectSQL } from 'src/Clases/Service/PostgreSQL/Conect.service';
import { PerfilesService } from 'src/Clases/Service/Personas/Perfil.service';





@Component({
  selector: 'Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  providers: [PouchPerson, conectSQL]
})
export class Login {
  private idColegio = "LLS";
  user: string = "";
  pass: string = "";
  usuario:any;
  logoEmpresa;
  public id_config_simulacion: string;
  private oPersonServie: PersonaService = new PersonaService();
  private oLoginService: LoginService = new LoginService();
  private oPerfilService: PerfilesService = new PerfilesService();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, private oPouchPerson: PouchPerson, private conectPostgre: conectSQL
  ) {
  }

  ingresar() {

    if (this.user.trim() != "" && this.pass.trim() != "") {
      //this.oLoginService.Login(this.idColegio, this.user,this.oPouchPerson, this.pass).then(resp =>{
      this.oLoginService.LoginSQL(this.idColegio, this.user, this.conectPostgre, this.pass).then(resp => {
        if (resp !== undefined) {
          console.log(resp)
          this.oPerfilService.getMenu(this.idColegio, resp.Perfil, this.conectPostgre).then(menu => {
            console.log(menu)
            this.usuario= resp
            this.usuario.Menu=menu;
            localStorage.setItem("usuario" + this.idColegio, JSON.stringify(this.usuario).split('@').join(''))
            this.router.navigate(['ADM/addEstudiante'])
          })

        } else {
          alert("Informacion ingresada incorrecta");
        }
      });
    } else {
      alert("Ingrese usuario y contraseña")
    }


    //this.router.navigate(['ADM/Tablero1'])
  }

  Registrar() {
    var data = require('src/Temp/Estudiantes.json');

    var arrOperson = new Array<Persona>();
    arrOperson = data.Personas;
    console.log(arrOperson);
    // arrOperson.forEach(persona => {
    //   this.oPersonServie.AddEstudiante(persona, this.conectPostgre);
    // })
    this.oPersonServie.AddEstudiante(arrOperson[0], this.conectPostgre);



  }
}

