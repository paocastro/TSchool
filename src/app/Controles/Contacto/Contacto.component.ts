import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Contacto } from "src/Clases/Entity/Personas/Contacto.type";

@Component({
    selector: 'contacto',
    templateUrl: './Contacto.component.html',
    styleUrls: ['./Contacto.component.css']
})



export class contactoComponent{
    @Input() Tipo;
    @Input() oLista;
    @Output() agregoContacto= new EventEmitter<Contacto>();
    oContacto:Contacto= new Contacto();
    modalReference: NgbModalRef;
    constructor( private modalService: NgbModal){
        this.oContacto= new Contacto();
    }

    openDialog(content){
        this.modalReference = this.modalService.open(content)
        this.modalReference.result.then((result) => {
          //this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    guardar(){
        this.oContacto.Tipo=this.Tipo;
        this.agregoContacto.emit(this.oContacto)
        this.oContacto= new Contacto();
        this.modalReference.close();
        
    }
}