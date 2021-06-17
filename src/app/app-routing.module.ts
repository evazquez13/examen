import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PresentarExamenComponent } from './pages/presentar-examen/presentar-examen.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'presentarExamen/:id', component: PresentarExamenComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
