
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PositionsComponent } from './components/positions/positions.component';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatPseudoCheckbox } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import MatRadioModule from '@angular/material/radio';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { DateAdapter } from '@angular/material/core';
import { DatepickerViewModel } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // נוסיף גם עבור MatNativeDateModule
import _MatStepperIntl from '@angular/material/stepper';
import { MatAccordion } from '@angular/material/expansion';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { from } from 'rxjs';
import { MomentDateAdapter } from '@angular/material-moment-adapter'; // Optional for Moment.js
import { PositionService } from '../position/position.service';
import { AddPositionComponent } from './components/add-position/add-position.component';
import { PositionRoutingModule } from './position-routes.module';
import { AuthService } from '../register/auth.service';
import { AuthGuard } from '../auth-guard';
@NgModule({
  declarations: [AddPositionComponent, PositionsComponent],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatOption,
    MatPseudoCheckbox,
    MatSelect,
    PositionRoutingModule,
    MatStepperModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    PositionRoutingModule

  ],
  exports: [
    MatTableModule,
    PositionsComponent,
    RouterModule,
    AddPositionComponent, MatStepperModule,
  ],
  providers: [AuthService, AuthGuard, PositionService, MatStepper, MatStepper, provideNativeDateAdapter(), PositionService,],
})
export class PositionModule { }
