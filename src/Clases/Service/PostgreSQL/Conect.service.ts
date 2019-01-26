import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from 'src/Clases/Entity/Personas/Persona.type';
import 'rxjs/add/operator/map'


@Injectable()
export class conectSQL {

  private iServidorPersonas: string = "http://localhost:5004/";
  private iServidorAdmPage:string= "http://localhost:5002/";

  constructor(private http: HttpClient,private httpClient: HttpClient) {

  }


  

  // getAPI(complement: string): Observable<any> {
  //   return this.http.get(serverSQL + complement);
  // }

  // postAPI(complement: string, oData: any) {
  //   console.log(oData);
  //   const headers = new HttpHeaders()
  //     .set('Authorization', 'my-auth-token')
  //     .set('Content-Type', 'application/json');

  //   this.http.post(serverSQL + complement, oData, {
  //     headers: headers
  //   })
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  // }


  public HttpGetWithBodyPersonas(url:string, params:any){
    return this.httpGetWithBody(url, this.iServidorPersonas, params);
  }

  public HttpGetWithBodyAdmPage(url:string, params:any){
    return this.httpGetWithBody(url, this.iServidorAdmPage, params);
  }
  //Post
  postServiceResponseHttpCallService(urlGet:string, params,iServidor){
    return this.http.post(iServidor + urlGet, params).map(res => {
        return res;
    });
}
  postServiceResponseHttpAdmPage(urlGet:string, params){
    return this.postServiceResponseHttpCallService(urlGet, params, this.iServidorAdmPage);
}

  /**
   * Metodo GET, llega como parametro la URL, el servidor y los parametros a enviar
   * @param urlGet URL del servicio a consumir
   * @param iServidor Servidor a consumir
   * @param parametros Parametros a enviar
   */
  private httpGetWithBody(urlGet: string, iServidor: string, parametros: any) {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    //const options = new RequestOptions({headers: headers, body: {"correo": "params"}, params:myParams});

    return this.httpClient.get(iServidor + urlGet,
      {
        params: parametros
      }).map(res => {
        return res;
      });
  }

}