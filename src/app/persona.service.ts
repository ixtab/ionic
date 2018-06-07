import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";

/**
 * Servicio que nos proporciona
 * información de una persona. 
 * En este caso hacemos un servicio simulado.
 */

@Injectable()
export class PersonaService {

    constructor()
    {

    }

    getPersona() : Persona
    {
        let persona : Persona;
        persona = new Persona ("King Kong", 55000, 18);

        return persona;
    }

}