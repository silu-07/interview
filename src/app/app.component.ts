import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Include HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jsonData: any;
  showScrollButton: boolean = false; // Add this property to track the scroll button visibility

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/Untitled-1.json').subscribe(
      (data) => {
        this.jsonData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when the user scrolls down 200px
    this.showScrollButton = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  }
}