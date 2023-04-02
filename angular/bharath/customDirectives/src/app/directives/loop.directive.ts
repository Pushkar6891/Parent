import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoop]',
})
export class LoopDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}

  @Input('appLoop')
  public set myCustomLoop(num: number) {
    for (var i = 0; i < num; i++) {
      this.containerRef.createEmbeddedView(this.templateRef);
    }
  }
}
