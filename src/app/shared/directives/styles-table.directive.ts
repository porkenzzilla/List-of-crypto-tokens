import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleTableDirective]'
})
export class StylesTableDirective implements AfterViewInit{
  regExpMinus = /^-/g;

  constructor(public el: ElementRef, public renderer: Renderer2) {
 }

 // get textContent of element, in hook AfterViewInit
 ngAfterViewInit() {
  if(this.el.nativeElement.textContent.match(this.regExpMinus)){
    this.renderer.addClass(this.el.nativeElement, 'red');
    return;
  }
  else{
    this.renderer.addClass(this.el.nativeElement, 'green');
    return;
  }
}
  
}
