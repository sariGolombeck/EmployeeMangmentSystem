import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { }
  ngOnInit(): void {  
    if(sessionStorage.getItem("token")!=""){
      this._snackBar.open('You are not logged in!', 'Close', {
        duration: 5000,
        panelClass: ['error-snackbar'],
        
      });
    }
    else{
    sessionStorage.setItem('token', "");
  this._snackBar.open('Logged out successfully!', 'Close', {
    duration: 5000,

    panelClass: ['success-snackbar'],
  });
  this._router.navigate(['/home']);
}
  }






}
