import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
        CommonModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule
  ],
  exports: [
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule 
  ]
})
export class AngularMaterialModule { }
