import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario.model';
import { FirebaseService } from 'src/app/services/firebase.service';



@Component({
  selector: 'app-presentar-examen',
  templateUrl: './presentar-examen.component.html',
  styleUrls: ['./presentar-examen.component.css']
})
export class PresentarExamenComponent implements OnInit {

  id: string | null = '';
  cuestionario: Cuestionario = new Cuestionario();
  interval: any;
  time: number = 14400;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  constructor(private route: ActivatedRoute,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {

      this.firebaseService.obtenerCuestionarioPorId(this.id).subscribe((res: any) => {
        this.cuestionario = res;
      });

    }


    this.crearTemporizador();

  }

  crearTemporizador() {

    this.interval = setInterval(() => {

      if (this.time === 0) {
        console.log("Se termino el examen");
        clearInterval(this.interval);
      } else {
        this.time = this.time - 1;
        this.horas = Math.floor(this.time / 3600);
        this.minutos = Math.floor((this.time % 3600) / 60);
        this.segundos = this.time % 60;
      }

    }, 1000);

  }

  terminarExamen() {


  }


}
