export class Persona {
    nombre: string;
    peso: number;
    estatura: number;

    constructor (nombre : string, peso : number, estatura : number)
    {
        this.nombre = nombre;
        this.estatura = estatura;        
        this.peso = peso;
    }
}