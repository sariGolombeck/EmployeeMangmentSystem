// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { RouterLink } from '@angular/router';
// import { MatButton } from '@angular/material/button';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home-page.component.html',
//   standalone: true,
//   imports: [RouterLink, MatButton],
//   styleUrls: ['./home-page.component.scss']
// })
// export class HomePageComponent {

//   constructor(private router: Router) { }

//   onRegisterClick() {
//     this.router.navigate(['/register']);
//   }

//   onLoginClick() {
//     this.router.navigate(['/login']);
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [RouterLink, MatButton],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private router: Router) { }

  onRegisterClick() {
    this.router.navigate(['/register']);
  }

  onLoginClick() {
    this.router.navigate(['/login']);
  }
}

