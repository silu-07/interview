import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() inputValue: string = 'a';
  previousValue: string = '';

  ngOnInit(): void {
    console.log('Component Initialized using  NgOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges:', changes);
    // Perform actions based on the changes
    if (changes['inputValue']) {
      const previousValue = changes['inputValue'].previousValue;
      const currentValue = changes['inputValue'].currentValue;
      console.log(`ngOnChanges: Input value changed from "${previousValue}" to "${currentValue}"`);
    }
  }

  ngDoCheck() {
    // Custom change detection logic
    if (this.inputValue == "a") {
      console.log(`ngDoCheck: Input value changed from "${this.previousValue}" to "${this.inputValue}"`);
      this.previousValue = this.inputValue; // Update previous value for next check
    }
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content has been initialized.');
  }

}
