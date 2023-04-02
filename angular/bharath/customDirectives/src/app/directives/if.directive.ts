import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}

  @Input()
  public set appIf(condition: boolean) {
    if (condition) {
      this.containerRef.createEmbeddedView(this.templateRef);
    } else {
      this.containerRef.clear();
    }
  }
}
