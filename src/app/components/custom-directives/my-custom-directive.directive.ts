import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]',
  standalone: true
})
export class MyCustomDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Change the background color on mouse enter and leave
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('lightblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
