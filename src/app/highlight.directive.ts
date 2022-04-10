import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.backgroundColor ="#39AEA9";
    
   }
//    @HostListener("click") onClicks(){
//     this.textDeco("line-through")
//   }
//   private textDeco(action:string){
//     this.elem.nativeElement.style.textDecoration=action;

  
//  }

}
