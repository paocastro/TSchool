import { PouchPerson } from "../Pouch/PouchPerson.service";
import { Diario } from "src/Clases/Entity/TRX/Diario.type";

export class DiarioService{
    public async AddDiarioUnitToCouch(idColegio:string, iDiario:Diario, oPouchPerson:PouchPerson){
        var data;
        var oDataDiario:Array<Diario>;
        var idBD = idColegio +  "?Diario";

        data = await oPouchPerson.get(idBD);
        if(data.Diarios !== undefined){
            oDataDiario = data.Diarios;
        }else{
            oDataDiario = Array<Diario>();
        }
        

        oDataDiario.push(iDiario);
        this.AddDiarioToCouch(idColegio, oDataDiario, oPouchPerson);   
    }

    public AddDiarioToCouch(idColegio:string, iDiario:Array<Diario>, oPouchPerson:PouchPerson){
        var idBD = idColegio +  "?Diario";
        var oPersonas = {"Diarios": iDiario}
        oPouchPerson.put(idBD, oPersonas);
    }



}