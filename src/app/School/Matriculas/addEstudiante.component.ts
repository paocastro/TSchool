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
  
  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
    
  }

  
}

