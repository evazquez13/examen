import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario = new UsuarioModel();
  tipUsuario: any[] = [{
    id: 'admin',
    desc: 'Administrador'
  },
  {
    id: 'usuario',
    desc: 'Usuario'
  }
  ];

  constructor(private firbaseServer: FirebaseService) { }

  ngOnInit(): void {
  }

  guardarUsuario(form: NgForm) {

    if (form.invalid) {
      console.log("Formulario invalido");
    }

    this.firbaseServer.crearUsuario(this.usuario).subscribe(res => {
      this.usuario = res;
    });
  }

}
