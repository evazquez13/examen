import { Component, OnInit } from '@angular/core';
import { Cuestionario } from 'src/app/models/cuestionario.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  cuestionarios: Cuestionario[] = [];

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {

    this.firebase.obtenerUsuarios().subscribe(res => {
      this.usuarios = res;
    });

    this.firebase.obtenerCuestionarios().subscribe(res => {
      this.cuestionarios = res;
    });

  }

}
