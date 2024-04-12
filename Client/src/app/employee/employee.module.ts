
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import { EmployeeService } from './employee.service';
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
import { PositionSelectionComponent } from './components/position-selection/position-selection.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
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
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { from } from 'rxjs';
import { MomentDateAdapter } from '@angular/material-moment-adapter'; // Optional for Moment.js
import { PositionService } from '../position/position.service';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { MatRadioButton } from '@angular/material/radio';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { PositionEmployeeTableComponent } from './components/positions-employee-table/positions-employee-table.component';
import { EditEmployeePositionComponent } from './components/edit-employee-position/edit-employee-position.component';
import { DeleteEmployeeConfirmationDialogComponent } from './components/delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
@NgModule({
  declarations: [DeleteEmployeeConfirmationDialogComponent,PositionSelectionComponent,UpdateEmployeeComponent, EditEmployeePositionComponent, PositionEmployeeTableComponent, EmployeesComponent, AddEmployeeComponent],
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
    MatStepperModule,
    CommonModule,
    EmployeeRoutingModule,
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
    MatRadioButton,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,


  ],
  exports: [
    MatTableModule
    ,DeleteEmployeeConfirmationDialogComponent,
    MatStepperModule,
EmployeesComponent,    EmployeeRoutingModule,
    RouterModule,
    AddEmployeeComponent, MatStepperModule,
    CdkStepperModule, UpdateEmployeeComponent,
    PositionEmployeeTableComponent, EditEmployeePositionComponent,PositionSelectionComponent
  ],
  providers: [PositionSelectionComponent, EmployeeService, MatStepper, MatStepper, provideNativeDateAdapter(), PositionService,], // Provide the native date adapter
})
export class EmployeeModule { }
