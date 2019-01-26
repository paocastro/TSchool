import { conectSQL } from "../PostgreSQL/Conect.service";


export class PerfilesService{
    public async getMenu(idColegio: string, nomPerfil: string, oService: conectSQL) {
        try {
            var data;
            var params = { sPerfil: nomPerfil } // [FromQuery] string User
            data = await oService.HttpGetWithBodyPersonas("Perfilacion/GetMenu/"+ idColegio, params).toPromise();
           
            if(data.MENU!== undefined){
                return data.MENU;
            }else{
                return undefined;
            }
            

        } catch{
            return false; 
        }

    }
}