import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildComponent } from "./components/child/child.component";
import { FormsModule } from '@angular/forms';
import { LifecycleComponent } from "./components/lifecycle/lifecycle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ChildComponent, FormsModule, LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview';
  message: string = '';
  parentValue: string = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  // Function to receive data from child component
  receiveMessage(message: string) {
    this.message = message;
  }

  callChildMethod() {
    this.childComponent.childMethod();
  }
}
