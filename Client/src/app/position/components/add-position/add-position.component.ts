// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Position } from '../../../position';
// import { PositionService } from '../../../position.service';

// @Component({
//   selector: 'app-position-form',
//   templateUrl: 'add-position.component.html',
//   styleUrls: ['./add-position.component.scss'],
// })
// export class PositionFormComponent implements OnInit {
//   positionForm!: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private _positionService: PositionService
//   ) {}

//   ngOnInit(): void {
//     this.positionForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       description: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.positionForm.invalid) {
//       return;
//     }

//     const formData = this.positionForm.value;
//     const newPosition = new Position(formData.name, formData.description);

//     this._positionService.addPosition(newPosition).subscribe(
//       (response) => {
//         console.log('Position added successfully:', response);
//         // נוסיף כאן קוד נוסף לטיפול במצב ההצלחה
//       },
//       (error) => {
//         console.error('Failed to add position:', error);
//         // נוסיף כאן קוד נוסף לטיפול במצב השגיאה
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Position } from '../../models/position';
import { PositionEmployeePostModel } from '../../../position-employee-post-model';
import { PositionService } from '../../position.service';
import { PositionPostModel } from '../../models/positionPostModel';
@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss'],
})
export class AddPosition implements OnInit {
  positionForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _positionService: PositionService
  ) { }

  ngOnInit(): void {
    this.positionForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.positionForm.invalid) {
      return;
    }

    const formData = this.positionForm.value;
    console.log("formdata of position", formData);
    // const newPosition= new PositionPostModel(formData.name, formData.description);

    this._positionService.addPosition(formData).subscribe(({
      next: (response) => {
        console.log('Position added successfully:', response);
        // נוסיף כאן קוד נוסף לטיפול במצב ההצלחה
      },
      error: (error) => {
        console.error('Failed to add position:', error);
        // נוסיף כאן קוד נוסף לטיפול במצב השגיאה
      }
    }))}}
