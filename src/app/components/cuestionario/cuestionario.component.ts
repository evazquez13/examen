import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Cuestionario, Respuesta, Pregunta } from '../../models/cuestionario.model'

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  form!: FormGroup;
  cuestionario: Cuestionario = new Cuestionario();

  constructor(private fb: FormBuilder,
    private firbaseservice: FirebaseService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get preguntas() {
    return this.form.get('preguntas') as FormArray;
  }

  crearFormulario() {

    this.form = this.fb.group({
      nombreCuestionario: ['', Validators.required],
      instrucciones: ['', Validators.required],
      preguntas: this.fb.array([]),
    });

  }

  agregarPregunta() {

    this.preguntas.push(this.nuevaPregunta());

  }

  nuevaPregunta() {

    return this.fb.group({
      pregunta: '',
      respuestas: this.fb.array([])
    });

  }

  eliminarPregunta(i: number) {

    this.preguntas.removeAt(i);

  }

  respuestaArray(index: number) {

    return this.preguntas.at(index).get('respuestas') as FormArray;

  }

  agregarRespuesta(index: number) {

    this.respuestaArray(index).push(this.nuevaRespuesta());

  }

  nuevaRespuesta() {

    return this.fb.group({
      respuesta: '',
      isValid: false
    })

  }

  borrarRespuesta(ipreg: number, ires: number) {

    this.respuestaArray(ipreg).removeAt(ires);

  }


  guardarCuestionario() {

    this.cuestionario.nombre = this.form.value.nombreCuestionario;
    this.cuestionario.instrucciones = this.form.value.instrucciones;
    this.cuestionario.creacion = new Date(Date.now())

    Object.values(this.form.controls).forEach(control => {

      if (control instanceof FormArray) {
        Object.values(control.controls).forEach(control => {
          this.cuestionario.preguntas.push(control.value);
        })
      }

    });

    this.firbaseservice.crearCuestionario(this.cuestionario).subscribe(res => {

      console.log(res);

    });

  }

}
