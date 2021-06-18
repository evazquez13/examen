import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { PresentarExamenComponent } from './pages/presentar-examen/presentar-examen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './common/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearUsuarioComponent,
    CuestionarioComponent,
    PresentarExamenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
