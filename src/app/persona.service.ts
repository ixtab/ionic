import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Observable";



@Injectable()
export class PersonaService {

    static URL_SERVICIO_PERSONAS : string = "http://10.1.2.10:8080/appwebprofe/GetPersona";
    static URL_SERVICIO_LISTA_PERSONAS : string = "http://10.1.2.10:8080/appwebprofe/GetListaPersonas"

    constructor( private http : HttpClient)
    {

    }

    getPersonaHttp (): Observable<Persona>
    {
        let persona_remota: Observable<Persona>
        persona_remota = this.http.get<Persona> (PersonaService.URL_SERVICIO_PERSONAS);
        return persona_remota;
    }

    getListaPersonasHttp (): Observable<Persona[]> 
    {
        let lista_persona_remota : Observable<Persona[]>;

        lista_persona_remota = this.http.get<Persona[]>
        (PersonaService.URL_SERVICIO_LISTA_PERSONAS);

        return lista_persona_remota;
    }

/**
* Servicio que nos proporciona
* información de una persona. 
* En este caso hacemos un servicio simulado.
*/
    getPersona() : Persona
    {
        let persona : Persona;
        persona = new Persona ("King Kong", 55000, 18);

        return persona;
    }

}