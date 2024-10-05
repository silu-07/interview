import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})

export class PipesComponent {
  value: string = '';
  change(value: string) {
    this.value = value;
  }
}
