import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/Clases/Entity/Personas/Persona.type';

const serverSQL:string = "http://localhost:3000/";

@Injectable()
export class conectPostgre{
    constructor(private http: HttpClient){
        
    }

    getAPI(complement:string): Observable<any> {
        return this.http.get(serverSQL + complement);
    }
    
}