import { Component } from '@angular/core';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
 

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [MyCustomDirectiveDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.scss'
})
export class CustomDirectivesComponent {

}
