import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {

    this.firebase.obtenerUsuarios().subscribe(res => {
      this.usuarios = res;
    });

  }

}
