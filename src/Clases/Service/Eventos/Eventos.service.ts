import { conectSQL } from "../PostgreSQL/Conect.service";

export class EventosService{

    public async getEventosbyTypo(idColegio:string,oService:conectSQL, ){
        var data;
        data = await oService.HttpGetWithBodyAdmPage ("PageController/getEventosAll/" + idColegio , null).toPromise();
        
        data = JSON.stringify(data).split("@").join("")
        data=  JSON.parse(data)
        if(data !== undefined ){
            return data;    
        }else{
            return null;
        }
    }

    public async updEvento(idColegio:string,dataEvento:any,oService:conectSQL, ){
        var data;
        data = await oService.postServiceResponseHttpAdmPage ("PageController/addEvento/" + idColegio , dataEvento).toPromise();
        //console.log(data)
        if(data !== undefined ){
            return data;    
        }else{
            return null;
        }
    }

}