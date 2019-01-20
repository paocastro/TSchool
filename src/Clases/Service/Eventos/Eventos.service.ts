import { conectSQL } from "../PostgreSQL/Conect.service";

export class EventosService{

    public async getEventosbyTypo(idColegio:string,sTipo:string,oService:conectSQL, ){
        var data;
        data = await oService.HttpGetWithBodyPersonas("EventosByTipo/" + idColegio + "/" + sTipo, null).toPromise();
        //console.log(data)
        if(data !== undefined ){
            return data;    
        }else{
            return null;
        }
    }

    public async updEvento(idColegio:string,data:any,idEvento:string,oService:conectSQL, ){
       
    }

}