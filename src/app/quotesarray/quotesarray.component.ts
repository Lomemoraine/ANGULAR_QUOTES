import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotesarray',
  templateUrl: './quotesarray.component.html',
  styleUrls: ['./quotesarray.component.css']
})
export class QuotesarrayComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Talk is cheap. Show me the code.', 'Linus Torvalds', 'Lorraine',0,0,new Date(2022,3,14)),
    new Quote(2,'when you do not create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.', 'Why The Lucky Stiff', 'Gift',0,0,new Date(2020,3,14)),
    new Quote(3,'I am not a great programmer; Iam just a good programmer with great habits.', 'Kent Beck', 'Chepkemoi',0,0,new Date(2020,3,14)),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
