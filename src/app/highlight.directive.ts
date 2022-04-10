import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.backgroundColor ="#39AEA9";
   }

}
