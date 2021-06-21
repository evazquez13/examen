import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUsuario } from '../models/usuario.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private URL_BASE = 'https://identitytoolkit.googleapis.com/v1';
    private API_KEY = 'AIzaSyC_aU1qvW4Ni4UnnKZjQLFBvIVu7829d3o';
    userToken: string = '';
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    constructor( private http: HttpClient ) { }
    
    logOut() {

    }

    logIn( usuario: AuthUsuario ) {

        const dataAuth = {
            ...usuario,
            returnSecureToken: true
        }
        
        return this.http.post( `${ this.URL_BASE }/accounts:signInWithPassword?key=${ this.API_KEY }`, dataAuth );
    }

    registrarUsuario( usuario: AuthUsuario ) {

    }

    private saveToken ( idToken: string ) {
        
        this.userToken = idToken;
        localStorage.setItem( 'token', this.userToken );
    }
}
