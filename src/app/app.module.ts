import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesarrayComponent } from './quotesarray/quotesarray.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteformComponent } from './quoteform/quoteform.component';
import { FormsModule } from '@angular/forms';
import { DatecountPipe } from './datecount.pipe';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesarrayComponent,
    HighlightDirective,
    QuoteformComponent,
    DatecountPipe,
    QuotedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
