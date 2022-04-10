import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isDeleted=new EventEmitter<boolean>();

  quoteDelete(remove:boolean){
    this.isDeleted.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
