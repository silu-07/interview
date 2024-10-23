import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  counter = signal(0);

  increment() {
    this.counter.set(this.counter()+ 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }
}
