// import { Component, NgModule } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { HeaderComponent } from "./header/header.component";
// @Component({
//     selector: 'app-root',
//     standalone: true,
//     templateUrl: './app.component.html',
//     styleUrl: './app.component.scss',
//     imports: [RouterOutlet, CommonModule, HeaderComponent]
// })
// export class AppComponent {
//   title = 'client';
// }
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, HeaderComponent, RouterModule] // Import RouterModule
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   sessionStorage.setItem("token","");
  }

  title = 'client';
}
