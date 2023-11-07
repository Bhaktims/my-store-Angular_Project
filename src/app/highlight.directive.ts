import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {

    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.color = 'red';
   }
   @HostListener('mouseover')
   onMouseOver(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'red';

   }
   @HostListener('mouseout')
   onMouseOut(){
    this.el.nativeElement.style.backgroundColor = 'green';
    this.el.nativeElement.style.color = 'pink';

  
   }

}
