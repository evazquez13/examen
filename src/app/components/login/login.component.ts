import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthUsuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario: AuthUsuario = new AuthUsuario;

    constructor( private auth: AuthService ) { }

    ngOnInit(): void {

        this.usuario.email = 'aldo.lizarde@mail.com';
        this.usuario.password = '123456';
    }

    onSubmit( form: NgForm ) {
        
        console.log(form)
        // this.auth.logIn( this.usuario )
        //     .subscribe( resp => {
                
        //         console.log( resp );

        //     }, ( err ) => {
                
        //         console.log( err.error.error.message );
        //     })
    }

}
