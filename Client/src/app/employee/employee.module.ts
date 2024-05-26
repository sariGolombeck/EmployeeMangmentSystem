
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/get-employees/employees/employees.component';
import { EmployeeRoutingModule } from './employee-routes.module';
import { RouterModule } from '@angular/router';
import { EmployeeService } from './employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { DisplayDetailsAndPositionsComponent } from './components/update/display-details-and-positions/display-details-and-positions.component';
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
import { DateOnlyPipe } from '../date-pipe/date-pipe';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { UpdateEmployeeComponent } from './components/update/update-employee/update-employee.component';
import { from } from 'rxjs';
import { MomentDateAdapter } from '@angular/material-moment-adapter'; // Optional for Moment.js
import { PositionService } from '../position/position.service';
import { MatRadioButton } from '@angular/material/radio';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { PositionEmployeeTableComponent } from './components/update/positions-employee-table/positions-employee-table.component';
import { DeleteEmployeeConfirmationDialogComponent } from './components/delete-employee-confirmation-dialog/delete-employee-confirmation-dialog.component';
import { EditEmployeePositionComponent } from './components/update/edit-employee-position/edit-employee-position.component';
import { PositionSelectionComponent } from './components/update/position-selection/position-selection.component';
import { AddEmployeeComponent } from './components/add/add-employee/add-employee.component';
import { ConfirmationDialogComponent } from './components/update/confirmation-dialog.component/save-editing-dialog.component';
import { AuthService } from '../register/auth.service';
import { AuthGuard } from '../auth-guard';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
declarations: [ConfirmationDialogComponent,DisplayDetailsAndPositionsComponent, DateOnlyPipe, DeleteEmployeeConfirmationDialogComponent, PositionSelectionComponent, UpdateEmployeeComponent, EditEmployeePositionComponent, PositionEmployeeTableComponent, EmployeesComponent, AddEmployeeComponent],
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
    MatDialogTitle,
    MatSnackBarModule,
    
  ],
  exports: [DisplayDetailsAndPositionsComponent,ConfirmationDialogComponent,
    MatTableModule
    , DeleteEmployeeConfirmationDialogComponent,
    MatStepperModule,
    MatSnackBarModule,
    
    EmployeesComponent, EmployeeRoutingModule,
    RouterModule,
    AddEmployeeComponent, MatStepperModule,
    CdkStepperModule, UpdateEmployeeComponent,
    PositionEmployeeTableComponent, EditEmployeePositionComponent, PositionSelectionComponent, DateOnlyPipe
  ],
  providers: [AuthService,AuthGuard, PositionSelectionComponent, EmployeeService, MatStepper, MatStepper, provideNativeDateAdapter(), PositionService,], // Provide the native date adapter
})
export class EmployeeModule { }
