import { Persona } from "src/Clases/Entity/Personas/Persona.type";
import { PouchPerson } from "../Pouch/PouchPerson.service";
import { conectSQL } from "../PostgreSQL/Conect.service";
import { async } from "q";

export class PersonaService{

    public AddPersonToCouch(idColegio:string, iPersonas:Array<Persona>, oPouchPerson:PouchPerson){
        var idBD = idColegio +  "?Personas";
        var oPersonas = {"Personas": iPersonas}
        oPouchPerson.put(idBD, oPersonas);
    }

    public async AddPersonUnitToCouch(idColegio:string, iPersona:Persona, oPouchPerson:PouchPerson){
        var data;
        var oDataPersona:Array<Persona>;
        var idBD = idColegio +  "?Personas";

        data = await oPouchPerson.get(idBD);
        oDataPersona = data.Personas;

        oDataPersona.push(iPersona);
        this.AddPersonToCouch(idColegio, oDataPersona, oPouchPerson);   
    }


    public async GetPersonaByNdoc(idColegio:string,sNdoc:string,  oPouchPerson:PouchPerson){
        var idBD = idColegio +  "?Personas";
        var data;
        var oDataPersona:Array<Persona>;
        var oPerson;

        data = await oPouchPerson.get(idBD);
        oDataPersona = data.Personas;

        oPerson = oDataPersona.find(x => x.Ndoc == sNdoc);
        return oPerson;
    }

    public async GetUsuarioSistema(idColegio:string,sNdoc:string,oService:conectSQL, ){
        var data;
        data = await oService.getAPI("PersonasByNdoc/" + idColegio + "/" + sNdoc).toPromise();

        if(data[0] !== undefined && data[0].j !== undefined){
            return data[0].j;    
        }else{
            return null;
        }
    }
}