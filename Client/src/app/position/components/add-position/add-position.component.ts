
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Position } from '../../models/position';
import { PositionEmployeePostModel } from '../../../employee/models/position-employee-post-model';
import { PositionService } from '../../position.service';
import { PositionPostModel } from '../../models/positionPostModel';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss'],
})
export class AddPositionComponent implements OnInit {
  positionForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _positionService: PositionService,
    private _router: Router,
    private location: Location
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

    this._positionService.addPosition(formData).subscribe(({
      next: (response) => {
        console.log('Position added successfully:', response);
        this.location.back()
      },
      error: (error) => {
        console.error('Failed to add position:', error);
      }
    }))
  }
}
