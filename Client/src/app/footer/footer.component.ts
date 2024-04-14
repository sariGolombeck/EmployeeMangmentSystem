import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [MatIcon,MatToolbar],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  // Add methods for button clicks if needed
  onSocialMediaClick() {
    // Implement your social media logic here
  }

  onContactClick() {
    // Implement your contact logic here
  }

  onHelpClick() {
    // Implement your help logic here
  }
}
