import { Component, OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {
  ngOnInit(): void {
    let observable = new Observable(subscriber => {
      subscriber.next("First value");
      setTimeout(() => subscriber.next("Second value"), 1000);
      setTimeout(() => subscriber.complete(), 2000);
    });

    observable.subscribe({
      next(value) { console.log(value); },
      complete() { console.log('Observable completed'); }
    });
  }
}
