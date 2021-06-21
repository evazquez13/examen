import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthUsuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    usuario: AuthUsuario = new AuthUsuario;

    constructor() { }

    ngOnInit(): void {

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
