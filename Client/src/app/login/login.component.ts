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

  constructor(private _loginService: LoginService) { }

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
      },
      error: (error) => { 
        console.error('Error logging in user:', error);
      }
    })
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
}
