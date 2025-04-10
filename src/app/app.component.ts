import { Component, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/Untitled-1.json').subscribe((data) => {
      this.jsonData = data;
    });
  }
}