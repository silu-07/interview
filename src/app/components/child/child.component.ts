import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})


export class ChildComponent implements OnInit {
  @Input() parentData!: string;
  @Output() messageEvent = new EventEmitter<string>();

  // Emit the event when the component is initialized
  ngOnInit() {
    this.messageEvent.emit('Hello from Child on page load!');
  }

  childMethod() {
    console.log("Method in child called!");
  }

}
