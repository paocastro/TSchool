import { PouchPerson } from "../Pouch/PouchPerson.service";
import { PersonaService } from "../Personas/persona.service";
import { Persona } from "src/Clases/Entity/Personas/Persona.type";
import { conectSQL } from "../PostgreSQL/Conect.service";

export class LoginService{


    public async Login(idColegio:string,sNdoc:string,oPouchPerson:PouchPerson, pass:string){
        var oPersonaService = new PersonaService();
        var oPer:Persona;
        oPer = await oPersonaService.GetPersonaByNdoc(idColegio, sNdoc, oPouchPerson)

        if(oPer !== undefined && oPer != null && oPer.USUSistema != null && oPer.USUSistema.Clave == pass){
            return true
        }

        return false;

    }

    public async LoginSQL(idColegio:string,sNdoc:string,oService:conectSQL, pass:string){
        var oPersonaService = new PersonaService();
        var oPer:Persona;
        oPer = await oPersonaService.GetUsuarioSistema(idColegio, sNdoc, oService)
        console.log(oPer)
        if(oPer !== undefined && oPer != null && oPer.USUSistema !== undefined){
            return true
        }

        return false;

    }

}