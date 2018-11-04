import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  text: string;

  results: any[] = ["a", "r","af"];

  constructor() { }

  ngOnInit() {
  }


  search(event) {
    this.results =[{Nombre:"a"}, {Nombre:"r"}, {Nombre:"as"}, {Nombre:"asq"}];
  }
}
