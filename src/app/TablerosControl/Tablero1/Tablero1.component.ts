import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'Tablero1',
  templateUrl: './Tablero1.component.html',
  styleUrls: ['./Tablero1.component.css'],
  providers: []
})
export class Tablero1Component  {
  
  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
    
  }

  
}

