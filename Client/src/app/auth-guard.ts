
import { Injectable } from '@angular/core';
import { CanActivate, Router, provideRoutes } from '@angular/router';
import { AuthService } from './register/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private snackBar: MatSnackBar, private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthorized()) {
  this.displayUnauthorizedAccessError();
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
   displayUnauthorizedAccessError(): void {
    this.snackBar.open('You do not have access. Redirecting to authorization page', 'Error', {
      duration: 3000,
      panelClass: ['mat-snackbar-error']
    });
}
}