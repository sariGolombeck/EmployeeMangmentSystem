
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
