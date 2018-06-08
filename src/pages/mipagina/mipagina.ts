import { Component } from '@angular/core';
import { Persona } from '../../app/persona.model';
import { PersonaService } from '../../app/persona.service';
import { AlertController } from 'ionic-angular';

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

  private persona_cargada : boolean;
  private lista_personas : Persona[];

  constructor(persona_service : PersonaService, public alertCtrl: AlertController) {
    this.nombre = "Pedro";
    this.estatura = 1.76;
    this.peso = 78;
    this.persona_cargada = false;
    // this.persona = persona_service.getPersona();
    persona_service.getListaPersonasHttp().subscribe
    (listaok => this.consumirListaRespuestaPersonas(listaok));

    persona_service.getPersonaHttp().subscribe
    (ok => this.consumirRespuestaPersona  (ok)); 
  }

  mostrarPersona (persona): void {
    console.log("Nombre: " + persona.nombre + ", peso: " + persona.peso + ", estatura: "+ persona.estatura);
  }

  consumirListaRespuestaPersonas (listaok : any)
  {
    this.lista_personas = <Persona[]> listaok;

    for (let i = 0; i  < this.lista_personas.length; i++){
      this.mostrarPersona (this.lista_personas[i]);
    }
    
  }

  consumirRespuestaPersona (ok : any)
  {
    this.persona = <Persona> ok;
    this.persona_cargada = true;
    console.log ("Persona recibida: " + this.persona.nombre + ", estatura: " + this.persona.estatura + ", peso: " + this.persona.peso );
  }

  calculaIMC(){
    let imc : number = 0;
    imc = this.persona.peso/(this.persona.estatura * this.persona.estatura);
    imc = parseFloat(imc.toFixed(2));
    this.resultado = "Resultado: " + imc.toString();
    this.showAlert();
  }

 
  showAlert() {
    const alert = this.alertCtrl.create({
      title: this.persona.nombre + ":",
      subTitle: "Mide " + this.persona.estatura + " y pesa " + this.persona.peso + ". <br>" +this.resultado,
      buttons: ['OK']
    });
    alert.present();
  }

}
