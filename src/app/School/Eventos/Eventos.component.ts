import { Component, ViewChild } from "@angular/core";
import { PouchPerson } from "src/Clases/Service/Pouch/PouchPerson.service";
import { EventosService } from "src/Clases/Service/Eventos/Eventos.service";
import { Router, ActivatedRoute } from "@angular/router";
import { conectSQL } from "src/Clases/Service/PostgreSQL/Conect.service";
import * as moment from 'moment';
import { NgbModalRef, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
    selector: 'Eventos',
    templateUrl: './Eventos.component.html',
    styleUrls: ['./Eventos.component.css'],
    providers: [PouchPerson, conectSQL]
})
export class eventosComponent {

    events: any[];
    oDataEventos;
    eventoSeleccionado;
    tiposEvento;
    Estados
    idColegio ;

    @ViewChild('content') content;
    modalReference: NgbModalRef;
    titulo;
    user
    private oEventosServicee: EventosService = new EventosService();
    constructor(
        private router: Router,private snackBar:MatSnackBar,
        private activatedRoute: ActivatedRoute, private oPouchPerson: PouchPerson,
        private conectPostgre: conectSQL, private modalService: NgbModal
    ) {
        this.idColegio=localStorage.getItem("empresa") ;
        console.log(this.idColegio)
        this.user = JSON.parse(localStorage.getItem("usuario" + this.idColegio)) ;
        this.tiposEvento = [
            { descripcion: 'Seleccione tipo de evento', code: null},
            { descripcion: 'Evento página web', code: 'EVE' },
            { descripcion: 'Noticia página web', code: 'NOTP' },
        ];

        this.Estados = [
            { descripcion: 'Activo', code: '1' },
            { descripcion: 'InActivo', code: '0' },
        ];
    }

    ngOnInit() {

        var eventos: Array<any> = new Array<any>();

        this.oEventosServicee.getEventosbyTypo(this.idColegio, this.conectPostgre).then(resp => {
            if(resp!== null && resp.Respuesta.EVENTOS){
                if(resp.Respuesta.EVENTOS.length === undefined ) resp.Respuesta.EVENTOS= new Array(resp.Respuesta.EVENTOS)
                this.oDataEventos = resp.Respuesta.EVENTOS
                console.log(this.oDataEventos)
            }
            

        });

    }


    openPopUp(content) {
        if (this.eventoSeleccionado === undefined) {
            this.eventoSeleccionado = {}
            this.titulo = "Adicionar Evento";
            this.eventoSeleccionado.IdEvento =-1
        }
        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then((result) => {
            //this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    cancelar() {
        this.modalReference.close()
        this.eventoSeleccionado = undefined
    }

    guardarEvento(){
        this.eventoSeleccionado.Tipo =this.eventoSeleccionado.Tipo.code 
        if(this.eventoSeleccionado.Estado === undefined){
            this.eventoSeleccionado.Estado ="1"
        }else{
            this.eventoSeleccionado.Estado =this.eventoSeleccionado.Estado.code
        }
       this.oEventosServicee.updEvento(this.idColegio,this.eventoSeleccionado,this.conectPostgre).then(x =>{
           console.log(x)
           this.modalReference.close();
           if(x==null){
               this.snackBar.open("Se presentaron errores al almacenar el evento")
           }else{
            this.snackBar.open("Evento almacenado correctamente")
           }
           
       })
    
        console.log(this.eventoSeleccionado)
    }

}