import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import MatFormFieldModule from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddPosition } from './components/add-position/add-position.component';


@NgModule({
  declarations: [AddPosition],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    
  
  ],
  exports: [AddPosition]
})
export class PositionModule { }
