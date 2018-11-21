import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from 'src/Clases/Entity/Personas/Persona.type';
import 'rxjs/add/operator/map'

const serverSQL:string = "http://localhost:3000/";

@Injectable()
export class conectSQL{
    constructor(private http: HttpClient){
        
    }

    getAPI(complement:string): Observable<any> {
        return this.http.get(serverSQL + complement);
    }

    postAPI(complement:string, oData:any) {
        console.log(oData);
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

        this.http.post(serverSQL + complement, oData, {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
    }
    
}