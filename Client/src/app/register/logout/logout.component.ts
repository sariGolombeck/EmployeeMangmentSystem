import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  providers:[AuthService],
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    if (!this.authService.isAuthorized()) {
      this._snackBar.open('You are not logged in!', 'Close', {
        duration: 5000,
        panelClass: ['error-snackbar'],
      });
    }
    else {
      sessionStorage.setItem('token', "");
      this._snackBar.open('Logged out successfully!', 'Close', {
        duration: 5000,

        panelClass: ['success-snackbar'],
      });
      this._router.navigate(['home']);
    }
  }






}
