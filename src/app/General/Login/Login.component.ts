import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
  providers: []
})
export class Login  {
  enProceso = false;
  user: string = "";
  pass: string = "";
  userSession;
  idkatios: string = "";
  logoEmpresa;
  oSession;
  public id_config_simulacion: string;

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
    
  }

  ingresar(){
    this.router.navigate(['ADM/Tablero1'])
  }
}

