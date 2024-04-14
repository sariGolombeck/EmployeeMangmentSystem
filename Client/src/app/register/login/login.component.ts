import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaderResponse } from '@angular/common/http';

import { User } from '../user';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, HttpClientModule],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private _loginService: LoginService,
    private location: Location, private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    const user: User = this.userForm.value;
    console.log('User submitted:', user);
    this._loginService.login(user).subscribe({
      next: (response: { token: any }) => {
        console.log('User logged in successfully:', response);
        const token = response.token;
        sessionStorage.setItem('token', token);
        this._snackBar.open('Logged in successfully!', 'Close', {
          duration: 5000,
          panelClass: ['success-snackbar'],
        });
        this.location.back()
      },
      error: (error) => {
        this._snackBar.open('Failed to update employee. Please try again later.', 'Close', {


          duration: 5000,


          panelClass: ['error-snackbar'],
        }
        );
        console.error('Error logging in:', error);
        // קוד להפעלת בקשת שרת
        // this.http.post('/api/users', user).subscribe(
        //   (response) => {
        //     console.log('User created successfully:', response);
        //   },
        //   (error) => {
        //     console.error('Error creating user:', error);
        //   }
        // );
      }
    });
  }
}
