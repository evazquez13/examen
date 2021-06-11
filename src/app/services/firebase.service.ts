import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { Cuestionario } from '../models/cuestionario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private url = 'https://examen-28a5d-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: UsuarioModel) {

    return this.http.post(`${this.url}/usuarios.json`, usuario).pipe(
      map((res: any) => {
        usuario.id = res.name;
        return usuario;
      })
    );

  }

  crearCuestionario(cuestionario: Cuestionario) {

    const cuestionarioTem: Cuestionario = {
      ...cuestionario
    }

    delete cuestionarioTem.id;

    return this.http.post(`${this.url}/cuestionario.json`, cuestionario);

  }

}
