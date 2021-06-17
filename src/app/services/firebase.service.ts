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

    return this.http.post(`${this.url}/usuarios.json`, this.obtenerUsuarioTem(usuario)).pipe(
      map((res: any) => {
        usuario.id = res.name;
        return usuario;
      })
    );

  }

  editarUsuario(usuario: UsuarioModel) {

    return this.http.put(`${this.url}/usuarios/${usuario.id}.json`, this.obtenerUsuarioTem(usuario))

  }

  private obtenerUsuarioTem(usuario: UsuarioModel) {

    const usuarioTem = {
      ...usuario
    }

    delete usuarioTem.id;

    return usuarioTem;

  }

  obtenerUsuarios() {

    return this.http.get(`${this.url}/usuarios.json`)
      .pipe(
        map(this.crearArrayUsuarios)
      );

  }

  private crearArrayUsuarios(usuariosRes: any) {

    if (usuariosRes === null) { return []; }

    const usuarios: UsuarioModel[] = [];

    Object.keys(usuariosRes).forEach(key => {

      const usuario: UsuarioModel = usuariosRes[key];
      usuario.id = key;
      usuarios.push(usuario);

    });

    return usuarios
  }

  crearCuestionario(cuestionario: Cuestionario) {

    return this.http.post(`${this.url}/cuestionario.json`, this.obtenerCuestionarioTem(cuestionario));

  }

  editarCuestionario(cuestionario: Cuestionario) {

    return this.http.put(`${this.url}/cuestionario/${cuestionario.id}.json`, this.obtenerCuestionarioTem(cuestionario));

  }

  private obtenerCuestionarioTem(cuestionario: Cuestionario) {

    const cuestionarioTem: Cuestionario = {
      ...cuestionario
    }

    delete cuestionarioTem.id;

    return cuestionarioTem;

  }

  obtenerCuestionarios() {

    return this.http.get(`${this.url}/cuestionario.json`)
      .pipe(
        map(this.crearArrayCuestionarios)
      );

  }

  crearArrayCuestionarios(cuestionariosRes: any) {

    if (cuestionariosRes === null) { return []; }

    const cuestionarios: Cuestionario[] = [];

    Object.keys(cuestionariosRes).forEach(key => {
      const cuestionario: Cuestionario = cuestionariosRes[key];
      cuestionario.id = key;
      cuestionarios.push(cuestionario);
    });

    return cuestionarios;
  }

  obtenerCuestionarioPorId(id: string) {

    return this.http.get(`${this.url}/cuestionario/${id}.json`);

  }

}
