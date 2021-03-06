import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-quotesarray',
  templateUrl: './quotesarray.component.html',
  styleUrls: ['./quotesarray.component.css'],
})
export class QuotesarrayComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Talk is cheap. Show me the code.',
      'Linus Torvalds',
      'Lorraine',
      12,
      0,
      new Date(2022, 3, 9)
    ),
    new Quote(
      2,
      'when you do not create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.',
      'Why The Lucky Stiff',
      'Gift',
      0,
      0,
      new Date(2022, 1, 4)
    ),
    new Quote(
      3,
      'I am not a great programmer; Iam just a good programmer with great habits.',
      'Kent Beck',
      'Chepkemoi',
      0,
      0,
      new Date(2022, 0, 30)
    ),
  ];
  highUpvotes:Quote[]=[
    new Quote( 
      1,
      'Talk is cheap. Show me the code.',
      'Linus Torvalds',
      'Lorraine',
      12,
      0,
      new Date(2021, 3, 9)
    )
  ]
  addNewQuote(quote) {
    // let quoteLength = this.quotes.length;
    // quote.id = quoteLength + 1;
    // quote.postDate = new Date(quote.postDate);
    // this.quotes.push(quote);
    let quotesLength=this.quotes.length+1;
    let quoteObj=new Quote(quotesLength,quote.quotename,quote.author,quote.person,0,0,new Date());
    this.quotes.push(quoteObj);
  }
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isDeleted, index) {
    if (isDeleted) {
      let toDelete = confirm(
        `Are you sure you want to delete this ${this.quotes[index].quotename}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
        this.highUpvotes.splice(index,1);
      }
    }
  }
  upvoteFunc(index) {
    var up = this.quotes[index].upvote + 1;
    this.quotes[index].upvote = up;
  }
  downvoteFunc(index) {
    var down = this.quotes[index].downvote + 1;
    this.quotes[index].downvote = down;
  }
  mostUpvotes() {
    this.highUpvotes.splice(0,this.highUpvotes.length);
    var largest = this.quotes[0].upvote;
    var number = null;
    for (var i = 0; i < this.quotes.length; i++) {
      number = this.quotes[i].upvote;

      largest = Math.max(largest, number);
    }
    for (var i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote === largest) {
        this.highUpvotes.push(this.quotes[i]);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
