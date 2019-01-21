import { PouchPerson } from "../Pouch/PouchPerson.service";
import { PersonaService } from "../Personas/persona.service";
import { Persona } from "src/Clases/Entity/Personas/Persona.type";
import { conectSQL } from "../PostgreSQL/Conect.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {


    public async Login(idColegio: string, sNdoc: string, oPouchPerson: PouchPerson, pass: string) {
        var oPersonaService = new PersonaService();
        var oPer: Persona;
        oPer = await oPersonaService.GetPersonaByNdoc(idColegio, sNdoc, oPouchPerson)

        if (oPer !== undefined && oPer != null && oPer.USUSistema != null && oPer.USUSistema.Clave == pass) {
            return true
        }

        return false;

    }

    public async LoginSQL(idColegio: string, sNdoc: string, oService: conectSQL, pass: string) {
        try {
            var data;
            var params = { nDoc: sNdoc, sClave: pass } // [FromQuery] string User
            data = await oService.HttpGetWithBodyPersonas("Personas/Login/Ingresar/LLS", params).toPromise();
            if(data.Respuesta.Usuario !== undefined){
                return data.Respuesta.Usuario;
            }else{
                return undefined;
            }
            

        } catch{
            return false;
        }

    }

}