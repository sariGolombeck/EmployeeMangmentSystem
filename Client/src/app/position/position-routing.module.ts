
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { PositionsComponent } from './components/positions/positions.component';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { UpdatePositionComponent } from './components/update-position/update-position.component';

const POSITION_ROUTES: Route[] = [
  { path: '', component: PositionsComponent }, 
  { path: 'positions', component: PositionsComponent },
  { path: 'positions', component: PositionsComponent },
  { path: 'add-position', component: AddPositionComponent },
  { path: 'update/:id', component: UpdatePositionComponent },
  { path: '**', redirectTo: 'positions', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(POSITION_ROUTES), CommonModule],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
