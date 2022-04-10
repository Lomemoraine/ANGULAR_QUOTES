import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css'],
})
export class QuoteformComponent implements OnInit {
  newQuote = new Quote(0, '', '', '', 0, 0, new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(quoteform: NgForm) {
    this.addQuote.emit(this.newQuote);
    quoteform.resetForm();
  }

  constructor() {}

  ngOnInit(): void {}
}
