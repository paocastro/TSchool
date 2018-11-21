import { Component, ViewChild } from "@angular/core";
import { PouchPerson } from "src/Clases/Service/Pouch/PouchPerson.service";
import { EventosService } from "src/Clases/Service/Eventos/Eventos.service";
import { Router, ActivatedRoute } from "@angular/router";
import { conectSQL } from "src/Clases/Service/PostgreSQL/Conect.service";
import * as moment from 'moment';
import { NgbModalRef, NgbModal } from "@ng-bootstrap/ng-bootstrap";


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

    idColegio="LLS";

    @ViewChild('content') content;
    modalReference: NgbModalRef;
    titulo;
    private oEventosServicee: EventosService = new EventosService();
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute, private oPouchPerson: PouchPerson,
        private conectPostgre: conectSQL, private modalService: NgbModal
    ) {
    }

    ngOnInit() {

        var eventos: Array<any> = new Array<any>();

        this.oEventosServicee.getEventosbyTypo(this.idColegio, "1", this.conectPostgre).then(resp => {
            this.oDataEventos = resp
            this.oDataEventos.forEach(element => {
                eventos.push({ 'defId': element.idevento, 'title': element.titulo, 'backgroundColor': 'yellow', 'start': moment(element.fechainicio).format('YYYY-MM-DD') })
            });
            this.events = eventos;
        });

    }
    clickEnEvento(ievento) {
        this.eventoSeleccionado = this.oDataEventos.find(x => x.idevento == ievento.calEvent.event.def.extendedProps.defId)

        this.titulo = "Modificar "
        this.eventoSeleccionado.fechainicio = new Date(this.eventoSeleccionado.fechainicio)
        this.openPopUp(this.content)
        console.log(this.eventoSeleccionado)
    }

    openPopUp(content) {
        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then((result) => {
            //this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    cancelar(){
        this.modalReference.close()
        this.eventoSeleccionado=undefined
    }

    guardar(){
        this.oEventosServicee.updEvento(this.idColegio,this.eventoSeleccionado, this.eventoSeleccionado.idevento,this.conectPostgre)
    }
}