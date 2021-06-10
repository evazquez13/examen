import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { Cuestionario } from '../models/cuestionario.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private url = 'https://examen-28a5d-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: UsuarioModel) {

    return this.http.post(`${this.url}/usuarios.json`, usuario);

  }

  crearCuestionario(cuestionario: Cuestionario) {

    return this.http.post(`${this.url}/cuestionario.json`, cuestionario);

  }

}
