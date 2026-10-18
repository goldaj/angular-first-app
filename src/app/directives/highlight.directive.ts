import { Directive, HostListener, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color') backgroundColor: string;
  @Input() highlightColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor || 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = null;
  }
}
