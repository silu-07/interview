import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-card-popup',
  standalone: true,
  imports: [MatDialogModule ],
  templateUrl: './card-popup.component.html',
  styleUrl: './card-popup.component.scss',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <pre>{{ data.content }}</pre>
      <p>Score: {{ data.score }}</p>
      <a [href]="data.url" target="_blank">Visit URL</a>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-dialog-content {
        max-height: 400px;
        overflow-y: auto;
      }
      pre {
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    `,
  ],
})
export class CardPopupComponent implements AfterViewInit {
  @ViewChild(MatDialogModule, { read: ElementRef }) dialogContent!: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngAfterViewInit(): void {
    // Scroll to the top of the content when the popup opens
    if (this.dialogContent) {
      this.dialogContent.nativeElement.scrollTop = 0;
      this.dialogContent.nativeElement.focus(); // Ensure the content is focused
    }
  }
}