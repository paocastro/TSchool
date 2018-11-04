import { Contacto } from "./Contacto.type";
import { Estudiante } from "./Estudiante.type";
import { USUSistema } from "./USUSistema.type";

export class Persona{

    public IdColegio:string;
    public IdPersona:string;
    public Tdoc:string; // 1: CC, 2: TI.
    public Ndoc:string;
    public Nombres:string;
    public Apellidos:string;
    public FechaNac:Date;
    public LugarNacimiento:string;
    public EstadoCivil:string;
    public RH:string;
    public EPS:string;
    public Tipo:string;

    public listContacts : Array<Contacto>;
    public Estudiante:Estudiante ;
    public USUSistema:USUSistema ;

}