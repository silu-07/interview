import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CardPopupComponent } from './card-popup/card-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  jsonData: any;
  showScrollButton: boolean = false;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.http.get('assets/Untitled-1.json').subscribe(
      (data: any) => {
        this.jsonData = data;
        this.jsonData.data.children.forEach((item: any) => {
          if (item.data.selftext_html) {
            item.data.cleanedSelftext = this.decodeHtml(item.data.selftext_html);
          }
        });
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  decodeHtml(html: string): string {
    if (isPlatformBrowser(this.platformId)) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
  
      // Extract the text content and decode HTML entities
      let decodedText = tempDiv.textContent || tempDiv.innerText || '';
      decodedText = decodedText.replace(/<!--.*?-->/g, ''); // Remove comments
      decodedText = decodedText.replace(/\\n/g, '\n'); // Replace escaped newlines
      decodedText = decodedText.replace(/<[^>]*>/g, ''); // Remove all HTML tags
      decodedText = decodedText.replace(/&#39;/g, "'"); // Replace all occurrences of &#39; with '
      decodedText = decodedText.replace(/&gt;/g, '>'); // Replace all occurrences of —&gt; with —
      decodedText = decodedText.replace(/&lt;/g, '<'); // Replace all occurrences of &lt; with <
      decodedText = decodedText.replace(/&quot;/g, '""'); // Replace all occurrences of &lt; with <
      return decodedText.trim(); // Return the cleaned and decoded text
    }
    return html;
  }

  openCardPopup(card: any) {
    this.dialog.open(CardPopupComponent, {
      width: '90vw', // Default width
      height: '95vh', // Default height
      panelClass: 'custom-dialog-container', // Add a custom class for styling
      data: {
        title: card.data.title,
        content: card.data.cleanedSelftext,
        score: card.data.score,
        url: card.data.url,
      },
    });
  }
}