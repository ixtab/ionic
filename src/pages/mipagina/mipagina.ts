import { Component } from '@angular/core';
import { Persona } from '../../app/persona.model';
import { PersonaService } from '../../app/persona.service';

@Component({
  selector: 'page-mipagina',
  templateUrl: 'mipagina.html',
  styles: ['div{color:red;}'],
  providers: [PersonaService]
})
export class MipaginaPage {

  private peso : number;
  private estatura : number;
  private nombre : string;  

  private persona : Persona;
  
  private resultado : string;

  constructor(persona_service : PersonaService) {
    this.nombre = "Pedro";
    this.estatura = 1.76;
    this.peso = 78;
    this.persona = persona_service.getPersona();
  }

  calculaIMC(){
    let imc : number = 0;
    imc = this.persona.peso/(this.persona.estatura * this.persona.estatura);
    imc = parseFloat(imc.toFixed(2));
    this.resultado = "Resultado: " + imc.toString();
    console.log(imc);
  }

}
