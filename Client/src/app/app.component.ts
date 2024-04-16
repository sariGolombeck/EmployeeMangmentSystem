// // import { Component, NgModule } from '@angular/core';
// // import { RouterOutlet } from '@angular/router';
// // import { CommonModule } from '@angular/common';
// // import { HeaderComponent } from "./header/header.component";
// // @Component({
// //     selector: 'app-root',
// //     standalone: true,
// //     templateUrl: './app.component.html',
// //     styleUrl: './app.component.scss',
// //     imports: [RouterOutlet, CommonModule, HeaderComponent]
// // })
// // export class AppComponent {
// //   title = 'client';
// // }
// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './header/header.component';
// import { RouterModule, Routes } from '@angular/router';
// import { FooterComponent } from "./footer/footer.component";
// @Component({
//     selector: 'app-root',
//     standalone: true,
//     templateUrl: './app.component.html',
//     styleUrl: './app.component.scss',
//     imports: [RouterOutlet, CommonModule, HeaderComponent, RouterModule, FooterComponent] // Import RouterModule
// })
// export class AppComponent implements OnInit{
//   ngOnInit(): void {
//    sessionStorage.setItem("token","");
//   }

//   title = 'EmloyeesManagementSystem';
// }
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, CommonModule, HeaderComponent, RouterModule, FooterComponent] // Import RouterModule
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof sessionStorage !== 'undefined') {

   sessionStorage.setItem("token", "");
  }
}
  title = 'EmloyeesManagementSystem';
}
