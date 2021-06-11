export class Respuesta {

    descripcion: string = '';
    isValid: boolean = false;

}

export class Pregunta {
    pregunta: String = '';
    respuestas: Array<Respuesta> = [];
}

export class Cuestionario {

    id?: string;
    nombre: string = "";
    creacion!: Date;
    instrucciones: string = "";
    preguntas: Array<Pregunta> = [];

    constructor() { }

}