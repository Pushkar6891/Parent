import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStyles]',
})
export class StylesDirective {
  @Input()
  fontSize: string = '';

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
    elementRef.nativeElement.style.backgroundColor = 'yellow';
    elementRef.nativeElement.style.fontSize = '30px';
  }

  // lifecycle hook method which ius rendered after UI is loaded
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

  // handle events
  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
